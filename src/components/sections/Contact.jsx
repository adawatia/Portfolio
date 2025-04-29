import React, { useState, useEffect } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loadingDots, setLoadingDots] = useState("");
    const [formTouched, setFormTouched] = useState({
        name: false,
        email: false,
        message: false
    });
    const [characterCount, setCharacterCount] = useState(0);
    const [copied, setCopied] = useState(false);

    // Create animated loading dots for the submit button
    useEffect(() => {
        if (!isSubmitting) return;
        
        const interval = setInterval(() => {
            setLoadingDots(prev => {
                if (prev === "...") return "";
                return prev + ".";
            });
        }, 400);
        
        return () => clearInterval(interval);
    }, [isSubmitting]);

    // Track character count for message field
    useEffect(() => {
        setCharacterCount(formData.message.length);
    }, [formData.message]);

    // Copy email to clipboard function
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("example@email.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Prevent multiple submissions
        if (isSubmitting) return;
        
        // Validate email format before submission
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmissionStatus("invalid-email");
            setTimeout(() => {
                setSubmissionStatus(null);
            }, 3000);
            return;
        }
        
        setIsSubmitting(true);
        setLoadingDots(".");

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_USER_ID)
            .then((result) => {
                setSubmissionStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setFormTouched({ name: false, email: false, message: false });
                
                // Keep the isSubmitting state true while the success message is shown
                setTimeout(() => {
                    setSubmissionStatus(null);
                    setIsSubmitting(false);
                    setLoadingDots("");
                }, 3000);
            })
            .catch((error) => {
                console.error("Email sending error:", error);
                setSubmissionStatus("error");
                
                // Keep the isSubmitting state true while the error message is shown
                setTimeout(() => {
                    setSubmissionStatus(null);
                    setIsSubmitting(false);
                    setLoadingDots("");
                }, 3000);
            });
    };

    // Handle browser back button and prevent form resubmission
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (isSubmitting) {
                e.preventDefault();
                e.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isSubmitting]);

    // Handle input changes with field validation tracking
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFormTouched(prev => ({ ...prev, [name]: true }));
    };

    // Get status message text based on submission status
    const getStatusMessage = () => {
        switch(submissionStatus) {
            case "success":
                return "Message Sent Successfully!";
            case "error":
                return "Oops! Something went wrong. Please try again.";
            case "invalid-email":
                return "Please enter a valid email address.";
            default:
                return "";
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-6 w-full max-w-2xl">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center mb-8">
                        Get in Touch
                    </h2>
                    
                    {/* Alternative contact methods */}
                    <div className="mb-8 text-center">
                        <p className="text-gray-400 mb-2">Prefer to reach out directly?</p>
                        <div className="inline-flex items-center space-x-2">
                            <span className="text-white">devsarrawatia@gmail.com</span>
                            <button 
                                onClick={copyEmailToClipboard}
                                className="text-blue-400 hover:text-blue-300 focus:outline-none"
                                title="Copy email address"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>
                            {copied && <span className="text-green-500 text-sm">Copied!</span>}
                        </div>
                    </div>

                    {/* Submission Status Message */}
                    {submissionStatus && (
                        <div className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white ${
                            submissionStatus === "success" ? "bg-green-500" : 
                            submissionStatus === "invalid-email" ? "bg-yellow-500" : "bg-red-500"
                        } animate-fade-in z-50`}>
                            {getStatusMessage()}
                        </div>
                    )}

                    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                        {/* Form introduction */}
                        <div className="text-gray-400 text-sm">
                            <p>All fields are required. Your information is kept private and secure.</p>
                        </div>
                    
                        {/* Name Input */}
                        <div className="relative">
                            <label htmlFor="name" className="text-sm text-gray-400 mb-1 block">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400"
                                placeholder="Enter your full name"
                                onChange={handleInputChange}
                                onBlur={() => setFormTouched(prev => ({ ...prev, name: true }))}
                                disabled={isSubmitting}
                                aria-invalid={formTouched.name && !formData.name ? "true" : "false"}
                                aria-describedby="name-error"
                            />
                            {formTouched.name && !formData.name && (
                                <div id="name-error" className="text-red-400 text-xs mt-1 pl-1">
                                    Please enter your name
                                </div>
                            )}
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <label htmlFor="email" className="text-sm text-gray-400 mb-1 block">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400"
                                placeholder="example@email.com"
                                onChange={handleInputChange}
                                onBlur={() => setFormTouched(prev => ({ ...prev, email: true }))}
                                disabled={isSubmitting}
                                aria-invalid={formTouched.email && !formData.email ? "true" : "false"}
                                aria-describedby="email-error"
                            />
                            {formTouched.email && !formData.email && (
                                <div id="email-error" className="text-red-400 text-xs mt-1 pl-1">
                                    Please enter your email
                                </div>
                            )}
                        </div>

                        {/* Message Textarea */}
                        <div className="relative">
                            <div className="flex justify-between mb-1">
                                <label htmlFor="message" className="text-sm text-gray-400 block">
                                    Your Message
                                </label>
                                <span className="text-xs text-gray-400">{characterCount} characters</span>
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400"
                                placeholder="Write your message..."
                                onChange={handleInputChange}
                                onBlur={() => setFormTouched(prev => ({ ...prev, message: true }))}
                                disabled={isSubmitting}
                                aria-invalid={formTouched.message && !formData.message ? "true" : "false"}
                                aria-describedby="message-error"
                            ></textarea>
                            {formTouched.message && !formData.message && (
                                <div id="message-error" className="text-red-400 text-xs mt-1 pl-1">
                                    Please enter your message
                                </div>
                            )}
                        </div>

                        {/* Privacy note */}
                        <div className="text-xs text-gray-400">
                            By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                                className={`w-full ${
                                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 
                                    (!formData.name || !formData.email || !formData.message) ?
                                    'bg-blue-400 cursor-not-allowed opacity-70' :
                                    'bg-blue-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] active:translate-y-0'
                                } text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 transform`}
                            >
                                {isSubmitting ? `Sending${loadingDots}` : 'Send Message'}
                            </button>
                        </div>
                        
                        {/* Estimated response time */}
                        <div className="text-center text-xs text-gray-400">
                            <p>Typical response time: 24-48 hours</p>
                        </div>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};