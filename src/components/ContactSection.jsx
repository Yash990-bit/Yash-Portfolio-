import React, { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

// Abstract 3D Sliced Shape to match reference - High Resolution
const AbstractShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Slow elegant rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            {/* Smoother, large Torus on the right */}
            <mesh ref={meshRef} position={[3.5, 0, -2]} rotation={[0, 0, Math.PI / 3]} scale={2.5}>
                {/* High Poly Geometry for smoothness */}
                <torusGeometry args={[1.8, 0.5, 64, 200, Math.PI * 1.2]} />
                <meshPhysicalMaterial
                    color="#ff4500" // Red/Orange
                    emissive="#330000"
                    emissiveIntensity={0.2}
                    roughness={0.1}
                    metalness={0.8}
                    transmission={0.1}
                    thickness={2}
                    clearcoat={1}
                />
            </mesh>
        </Float>
    );
};

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
        <section id="contact" className="min-h-screen w-full bg-black relative flex items-center justify-center overflow-hidden py-20">

            {/* 3D BACKGROUND LAYER - Pointer events none prevents blocking inputs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#ff4500" />
                    <Suspense fallback={null}>
                        <Environment preset="city" />
                        <AbstractShape />
                    </Suspense>
                </Canvas>
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl relative"
                >
                    {/* Top Row: 3 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Dropdown */}
                        <div className="relative group">
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
                        </div>

                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Your name"
                            required
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none transition-colors"
                        />

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Your email"
                            required
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Message Area */}
                    <textarea
                        rows="6"
                        placeholder="Your message"
                        required
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none transition-colors resize-none"
                    ></textarea>

                    {/* Privacy Checkbox */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="privacy"
                            required
                            className="w-5 h-5 rounded border border-white/20 bg-[#111] text-accent-cyan focus:ring-offset-0 focus:ring-0 checked:bg-white cursor-pointer"
                        />
                        <label htmlFor="privacy" className="text-gray-400 text-sm cursor-pointer select-none hover:text-white transition-colors">
                            I agree to the Privacy Policy
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="w-full bg-white text-black font-bold py-4 rounded-xl transition-all hover:bg-gray-200 disabled:opacity-50 disabled:cursor-wait"
                    >
                        {formStatus === 'sending' ? 'Sending...' : 'Submit'}
                    </button>

                </motion.form>

            </div>
        </section>
    );
};

export default ContactSection;
