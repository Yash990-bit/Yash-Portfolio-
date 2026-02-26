import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

import { motion } from 'framer-motion';



const ContactSection = () => {
    const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // Web3Forms API Endpoint
        // Note: You should replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms Access Key
        const accessKey = "f95a47a1-3f38-4fd5-881e-3973d26befea";

        const data = {
            ...formData,
            access_key: accessKey,
            from_name: "Portfolio Contact Form",
            subject: `New Message from ${formData.name}: ${formData.subject}`
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (result.success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="min-h-screen w-full relative flex items-center justify-center overflow-hidden py-20 bg-transparent">

            <div className="container mx-auto px-4 z-10 w-full max-w-5xl relative">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                        Ready for a chat?<br />
                        <span className="font-semibold text-white">Send us a message!</span>
                    </h2>
                </motion.div>

                {/* Glass Form */}
                <motion.form
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    onSubmit={handleSubmit}
                    className="space-y-6 glass p-8 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    {/* Top Row: 3 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Dropdown */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-gray-400 focus:text-white focus:border-cyan-500/50 focus:outline-none appearance-none cursor-pointer transition-all backdrop-blur-sm"
                            >
                                <option>Become a partner</option>
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Name Input */}
                        <motion.input
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all backdrop-blur-sm"
                        />

                        {/* Email Input */}
                        <motion.input
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all backdrop-blur-sm"
                        />
                    </div>

                    {/* Message Area */}
                    <motion.textarea
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        rows="6"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all backdrop-blur-sm resize-none"
                    ></motion.textarea>

                    {/* Privacy Checkbox */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="privacy"
                            required
                            className="w-5 h-5 rounded border border-white/20 bg-[#111] text-accent-cyan focus:ring-offset-0 focus:ring-0 checked:bg-white cursor-pointer"
                        />
                        <label htmlFor="privacy" className="text-gray-400 text-sm cursor-pointer select-none hover:text-white transition-colors">
                            I agree to the Privacy Policy
                        </label>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${formStatus === 'success' ? 'bg-green-500 text-white' :
                            formStatus === 'error' ? 'bg-red-500 text-white' :
                                'bg-white text-black hover:bg-gray-200'
                            } disabled:opacity-50 disabled:cursor-wait`}
                    >
                        {formStatus === 'sending' ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : formStatus === 'success' ? (
                            'Message Sent Successfully!'
                        ) : formStatus === 'error' ? (
                            'Error Sending Message'
                        ) : (
                            'Submit'
                        )}
                    </motion.button>

                </motion.form>

            </div>
        </section>
    );
};

export default ContactSection;
