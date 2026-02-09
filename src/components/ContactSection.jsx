import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

import { motion } from 'framer-motion';



const ContactSection = () => {
    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => {
                setFormStatus('idle');
                e.target.reset();
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="min-h-screen w-full relative flex items-center justify-center overflow-hidden py-20 bg-black/40 backdrop-blur-3xl">

            {/* Background Image from User */}
            {/* Background Layer - Matches site design */}
            <div className="absolute inset-0 z-0">
                <AnimatedBackground />
                {/* Additional overlay for contact section readability */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            {/* CONTENT LAYER - Z-10 to sit above canvas */}
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
                    className="space-y-6 bg-[#111113] p-8 rounded-3xl border border-white/5 shadow-2xl relative"
                >
                    {/* Top Row: 3 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Dropdown */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                            <select className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-gray-400 focus:text-white focus:border-white/40 focus:outline-none appearance-none cursor-pointer transition-colors">
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
                            placeholder="Your name"
                            required
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none transition-colors"
                        />

                        {/* Email Input */}
                        <motion.input
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            type="email"
                            placeholder="Your email"
                            required
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Message Area */}
                    <motion.textarea
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        rows="6"
                        placeholder="Your message"
                        required
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none transition-colors resize-none"
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
                        className="w-full bg-white text-black font-bold py-4 rounded-xl transition-all hover:bg-gray-200 disabled:opacity-50 disabled:cursor-wait"
                    >
                        {formStatus === 'sending' ? 'Sending...' : 'Submit'}
                    </motion.button>

                </motion.form>

            </div>
        </section>
    );
};

export default ContactSection;
