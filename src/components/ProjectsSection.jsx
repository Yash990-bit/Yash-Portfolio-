import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

// Placeholder project data - User can replace this later
const projects = [
    {
        id: 1,
        title: "AI SaaS Platform",
        category: "Web Application",
        description: "A cutting-edge SaaS platform powered by GPT-4 with real-time analytics and intelligent workflows. Designed for seamless user interaction and high-performance content generation.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop", // Placeholder
        features: [
            "AI-powered content generation",
            "Real-time analytics dashboard",
            "Intelligent workflow automation",
            "WebGL 3D visualizations",
            "Seamless API integrations"
        ],
        techStack: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "OpenAI"],
        liveLink: "#",
        githubLink: "#",
        color: "cyan" // Dynamic shadow color
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        category: "Admin Panel",
        description: "A comprehensive admin dashboard for managing products, orders, and customer analytics. Features dark mode, data visualization, and real-time sales tracking.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        features: [
            "Advanced data visualization",
            "Real-time order tracking",
            "Inventory management system",
            "Customizable report generation",
            "Role-based access control"
        ],
        techStack: ["React", "Redux", "Chart.js", "Node.js", "MongoDB"],
        liveLink: "#",
        githubLink: "#",
        color: "orange"
    },
    {
        id: 3,
        title: "Crypto Trading Bot",
        category: "FinTech",
        description: "An automated trading bot with backtesting capabilities and real-time market analysis. Executes trades based on custom strategies and technical indicators.",
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop",
        features: [
            "Real-time market data streaming",
            "Strategy backtesting engine",
            "Multi-exchange support",
            "Secure wallet integration",
            "Performance analytics"
        ],
        techStack: ["Python", "FastAPI", "WebSockets", "Docker", "PostgreSQL"],
        liveLink: "#",
        githubLink: "#",
        color: "red"
    }
];

const ProjectsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const currentProject = projects[currentIndex];

    // Helper for dynamic colors
    const getShadowColor = (color) => {
        switch (color) {
            case 'orange': return 'from-orange-500/20 to-red-500/20';
            case 'red': return 'from-red-500/20 to-orange-500/20';
            default: return 'from-cyan-500/20 to-purple-500/20';
        }
    };

    // Helper for active dot color
    const getActiveDotColor = (color) => {
        switch (color) {
            case 'orange': return 'bg-orange-400';
            case 'red': return 'bg-red-400';
            default: return 'bg-cyan-400';
        }
    };

    return (
        <section id="projects" className="py-24 bg-black relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <h3 className="text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase mb-4">
                        Portfolio
                    </h3>
                    <h2 className="text-5xl md:text-7xl font-bold text-white">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Projects</span>
                    </h2>
                    <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg">
                        Explore my latest work showcasing modern web technologies and creative solutions
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT: Project Image (7 cols) */}
                    <div className="lg:col-span-7 relative group perspective-1000">
                        {/* Background Glow - Dynamic Color */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${getShadowColor(currentProject.color)} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`}></div>

                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111113] aspect-video transform transition-all duration-700 ease-out group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-[1.02] shadow-2xl preserve-3d">
                            {/* Image */}
                            <img
                                src={currentProject.image}
                                alt={currentProject.title}
                                className="w-full h-full object-cover object-center"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Floating Badge */}
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-white/80">
                                v1.0.0
                            </div>

                            {/* Navigation Arrows Overlay - Only on Desktop/Image */}
                            <button
                                onClick={prevProject}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
                            >
                                <FaChevronLeft />
                            </button>

                            <button
                                onClick={nextProject}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Project Details (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Category Badge */}
                        <div className={`inline-block px-4 py-2 rounded-full border ${currentProject.color === 'red' ? 'border-red-500/30 bg-red-500/10 text-red-400' : currentProject.color === 'orange' ? 'border-orange-500/30 bg-orange-500/10 text-orange-400' : 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'} text-xs font-bold tracking-wider uppercase`}>
                            {currentProject.category}
                        </div>

                        {/* Title & Description */}
                        <div>
                            <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                                {currentProject.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                {currentProject.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3">Key Features</h4>
                            <div className="grid gap-2">
                                {currentProject.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-white/80">
                                        <FaCheckCircle className={`shrink-0 ${currentProject.color === 'red' ? 'text-red-400' : currentProject.color === 'orange' ? 'text-orange-400' : 'text-cyan-400'}`} />
                                        <span
                                            className="text-sm font-medium transition-all duration-300"
                                            style={{
                                                textShadow: currentProject.color === 'red' ? '0 0 10px rgba(248, 113, 113, 0.5)' :
                                                    currentProject.color === 'orange' ? '0 0 10px rgba(251, 146, 60, 0.5)' :
                                                        '0 0 10px rgba(34, 211, 238, 0.5)'
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

            
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {currentProject.techStack.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 hover:bg-white/10 hover:border-white/30 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 pt-4">
                            <a href={currentProject.liveLink} className={`flex-1 ${currentProject.color === 'red' ? 'bg-red-500 hover:bg-red-400' : currentProject.color === 'orange' ? 'bg-orange-500 hover:bg-orange-400' : 'bg-cyan-500 hover:bg-cyan-400'} text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105`}>
                                <FaExternalLinkAlt /> Live Preview
                            </a>
                            <a href={currentProject.githubLink} className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105">
                                <FaGithub size={20} /> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer / Navigation - Stacked Vertical Layout */}
                <div className="flex flex-col items-center justify-center mt-20 gap-4">
                    {/* Pagination Dots */}
                    <div className="flex gap-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? `w-12 ${getActiveDotColor(currentProject.color)}`
                                    : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="font-mono text-white/40 text-sm tracking-widest">
                        0{currentIndex + 1} <span className="text-white/20">/</span> 0{projects.length}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
