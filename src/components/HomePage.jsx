import React, { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';
import CursorParticles from './CursorParticles';
import ProfileSection from './ProfileSection';
import SkillsPlayground from './SkillsPlayground';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';


const HomePage = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Full Stack Developer", "Web Developer", "AI-ML Enthusiast"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 60 : 200);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    return (
        <div className="min-h-screen bg-transparent text-white selection:bg-cyan-500/30 selection:text-white relative font-sans overflow-x-hidden">
            <CursorParticles />
            <AnimatedBackground />

            <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-transparent backdrop-blur-md">
                <div
                    className="text-xl font-bold tracking-tight cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className="text-cyan-400">Yash</span>{' '}
                    <span className="text-purple-500">Raghubanshi</span>
                </div>

                <div className="hidden md:flex space-x-12 text-[12px] font-semibold text-white/60 uppercase tracking-widest">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                <button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#1a1a1e] py-2.5 px-6 rounded-2xl flex items-center gap-3 group hover:bg-[#25252b] transition-all"
                >
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold group-hover:scale-110 transition-transform">
                        <span className="rotate-[-45deg] leading-none">→</span>
                    </div>
                    <span className="text-[14px] font-bold text-gray-200">Let's Talk</span>
                </button>
            </nav>

            <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10 pt-16">
                <div className="relative">
                    <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-8">
                        Yash Raghubanshi
                    </h1>
                    <h2 className="text-2xl md:text-[2.5rem] text-white/90 font-medium tracking-tight mt-4 h-[50px]">
                        I am a <span className="text-cyan-400">{text}</span>
                        <span className="w-1 h-8 md:h-12 bg-white ml-2 inline-block animate-pulse align-middle" />
                    </h2>


                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all text-sm uppercase tracking-wider shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
                        >
                            Contact Me
                        </button>
                        <button className="bg-transparent px-12 py-4 rounded-full font-bold hover:bg-white/5 transition-all text-sm uppercase tracking-wider backdrop-blur-sm ring-1 ring-white/20 hover:ring-white/40">
                            My Resume
                        </button>
                    </div>


                    <div className="flex items-center justify-center gap-12 mt-16">
                        <a href="https://github.com/Yash990-bit" className="text-white/40 hover:text-white transition-all hover:scale-125">
                            <i className="fab fa-github text-2xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/yash-raghubanshi-ba9ba630b/" className="text-white/40 hover:text-cyan-300 transition-all hover:scale-125">
                            <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                        <a href="https://www.instagram.com/whyash7/" className="text-white/40 hover:text-pink-300 transition-all hover:scale-125">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-60 group cursor-pointer">
                    <div className="w-[24px] h-[40px] border-2 border-white/30 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-scroll-dot" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold opacity-80 group-hover:opacity-100 transition-opacity">Scroll</span>
                </div>
            </section>

            <section id="about">
                <ProfileSection />
            </section>

            <section id="skills">
                <SkillsPlayground />
            </section>

            <section id="projects">
                <ProjectsSection />
            </section>

            {/* ContactSection already has id="contact" inside it, but wrapping just in case or relying on internal ID */}
            <ContactSection />

        </div>
    );
};

export default HomePage;
