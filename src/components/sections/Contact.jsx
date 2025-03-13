import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submissionStatus, setSubmissionStatus] = useState(null); // Track submission status

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                setSubmissionStatus("success"); // Set status to success
                setFormData({ name: "", email: "", message: "" }); // Reset form data

                // Clear the status message after 3 seconds
                setTimeout(() => {
                    setSubmissionStatus(null);
                }, 3000);
            })
            .catch((error) => {
                console.error("Email sending error:", error);
                setSubmissionStatus("error"); // Set status to error

                // Clear the status message after 3 seconds
                setTimeout(() => {
                    setSubmissionStatus(null);
                }, 3000);
            });
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

                    {/* Submission Status Message */}
                    {submissionStatus && (
                        <div className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white ${
                            submissionStatus === "success" ? "bg-green-500" : "bg-red-500"
                        } animate-fade-in`}>
                            {submissionStatus === "success" ? "Message Sent Successfully!" : "Oops! Something went wrong. Please try again."}
                        </div>
                    )}

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="relative">
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400"
                                placeholder="Your Name"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400"
                                placeholder="example@email.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="relative">
                            <label htmlFor="message" className="sr-only">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400"
                                placeholder="Write your message..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] active:translate-y-0"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};