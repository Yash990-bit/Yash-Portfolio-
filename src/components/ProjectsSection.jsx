import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "AI Multi-Disease Detection",
        category: "Machine Learning / Web Application",
        description:
            "An AI-powered healthcare web application that predicts the likelihood of Liver Disease, Heart Disease, and Diabetes using trained machine learning models. The system provides fast, accurate predictions through an interactive UI, helping users understand health risks based on medical parameters.",

        image:
            "https://img.freepik.com/free-photo/black-med-school-scholar-studying-taking-notes-using-online-information_482257-117794.jpg?semt=ais_hybrid&w=740&q=80",

        features: [
            "Multi-disease prediction (Liver, Heart, Diabetes)",
            "Machine learning models trained on medical datasets",
            "Interactive data visualization using charts",
            "User-friendly web interface for medical inputs",
            "Secure backend with data validation"
        ],

        techStack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Axios",
            "Python",
            "FastAPI",
            "Uvicorn",
            "Pandas",
            "NumPy",
            "Kaggle",
            "Scikit-learn",
            "Joblib",
            "Matplotlib",
            "Seaborn",
            "Streamlit"
        ],
        liveLink: "https://multi-disease-detection.vercel.app/",
        githubLink: "https://github.com/Yash990-bit/multi_disease_detection",
        color: "cyan"
    },

    {
        id: 2,
        title: "Language Learning Platform",
        category: "Full Stack Web Application",
        description:
            "A real-time language learning platform that connects learners and tutors through live chat and video calls. Users can practice languages interactively with instant messaging, video sessions, and a modern responsive UI.",

        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",

        features: [
            "Live one-to-one video calling for language practice",
            "Real-time chat messaging system",
            "User authentication and secure sessions",
            "Tutor and learner role-based access",
            "Modern responsive UI with notifications",
            "Fast and scalable backend APIs"
        ],

        techStack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
            "Zustand",
            "Axios",
            "React Router",
            "React Query",
            "Stream Video SDK",
            "Stream Chat",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT Authentication",
            "bcryptjs",
            "CORS",
            "Cookie Parser",
            "dotenv"
        ],

        liveLink: "https://link-up-eta-eight.vercel.app/",
        githubLink: "https://github.com/Yash990-bit/Link-Up",
        color: "orange"
    },

    {
        id: 3,
        title: "Expense Tracker",
        category: "Finance / Productivity",
        description: "A full-stack Expense Tracker web application that helps users manage income, expenses, and balance efficiently with authentication, analytics, and export features.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1964&auto=format&fit=crop",
        features: [
            "JWT-based user authentication",
            "Add, edit, and delete income & expense records",
            "Automatic balance calculation",
            "Category-wise and date-wise tracking",
            "Interactive charts and analytics",
            "Export expenses to Excel",
        ],
        techStack: [
            "React",
            "Vite",
            "React Router DOM",
            "Tailwind CSS",
            "Recharts",
            "Axios",
            "React Icons",
            "React Hot Toast",
            "Emoji Picker",
            "Moment.js",

            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT Authentication",
            "bcrypt.js",
            "Multer",
            "dotenv",
            "CORS",

            "Excel (XLSX)",
            "Nodemon"
        ],
        liveLink: "https://expense-pilot-liard.vercel.app/",
        githubLink: "https://github.com/Yash990-bit/Expense-Pilot",
        color: "green"
    },

    {
        id: 4,
        title: "EstateEdge",
        category: "Auction Platform",
        description: "EstateEdge is a modern real estate bidding platform that enables users to browse properties, participate in online auctions, and manage bids in a fast and responsive environment.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1974&auto=format&fit=crop",
        features: [
            "Secure user authentication using Firebase",
            "Real-time property listing and bidding",
            "Responsive and fast UI powered by Vite",
            "Protected routes with React Router",
            "Cloud Firestore for real-time database",
            "Firebase Hosting for deployment",
        ],
        techStack: [
            "React",
            "Vite",
            "JavaScript",
            "Firebase Authentication",
            "Firebase Firestore",
            "Firebase Hosting",
            "React Router DOM",
            "Font Awesome",
            "ESLint"
        ],
        liveLink: "https://benevolent-madeleine-e6ac6d.netlify.app/",
        githubLink: "https://github.com/Yash990-bit/EstateEdge",
        color: "yellow"
    },

    {
        id: 5,
        title: "Skill Sync",
        category: "Skill Sharing Platform",
        description: "Skill Sync is a full-stack skill learning and sharing platform that helps users explore, learn, and grow their skills through a secure, responsive, and user-friendly interface.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1974&auto=format&fit=crop",
        features: [
            "User authentication with secure login and signup",
            "JWT-based authentication and protected routes",
            "Responsive navbar with mobile toggle",
            "Modern UI built with Tailwind CSS",
            "Seamless navigation using React Router",
            "API integration using Axios",
            "Token handling with local storage",
        ],
        techStack: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "React Router DOM",
            "Axios",
            "Node.js",
            "Express.js",
            "Prisma ORM",
            "PostgreSQL",
            "JWT Authentication"
        ],
        liveLink: "https://skill-sync-opal.vercel.app/",
        githubLink: "https://github.com/Yash990-bit/SkillSync",
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

    // Helper for Shadow Gradients
    const getShadowColor = (color) => {
        switch (color) {
            case 'orange': return 'from-orange-500/20 to-red-500/20';
            case 'red': return 'from-red-500/20 to-pink-500/20';
            case 'green': return 'from-green-500/20 to-emerald-500/20';
            case 'yellow': return 'from-yellow-500/20 to-orange-500/20';
            default: return 'from-cyan-500/20 to-purple-500/20';
        }
    };

    // Helper for Pagination Dots
    const getActiveDotColor = (color) => {
        switch (color) {
            case 'orange': return 'bg-orange-400';
            case 'red': return 'bg-red-400';
            case 'green': return 'bg-green-400';
            case 'yellow': return 'bg-yellow-400';
            default: return 'bg-cyan-400';
        }
    };

    // Helper for Badge/Text Colors (Reduces JSX complexity)
    const getColorClasses = (color) => {
        switch (color) {
            case 'orange':
                return {
                    badge: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
                    text: 'text-orange-400',
                    shadow: '0 0 10px rgba(251, 146, 60, 0.5)',
                    button: 'bg-orange-500 hover:bg-orange-400'
                };
            case 'red':
                return {
                    badge: 'border-red-500/30 bg-red-500/10 text-red-400',
                    text: 'text-red-400',
                    shadow: '0 0 10px rgba(248, 113, 113, 0.5)',
                    button: 'bg-red-500 hover:bg-red-400'
                };
            case 'green':
                return {
                    badge: 'border-green-500/30 bg-green-500/10 text-green-400',
                    text: 'text-green-400',
                    shadow: '0 0 10px rgba(74, 222, 128, 0.5)',
                    button: 'bg-green-500 hover:bg-green-400'
                };
            case 'yellow':
                return {
                    badge: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
                    text: 'text-yellow-400',
                    shadow: '0 0 10px rgba(250, 204, 21, 0.5)',
                    button: 'bg-yellow-500 hover:bg-yellow-400'
                };
            default: // Cyan
                return {
                    badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
                    text: 'text-cyan-400',
                    shadow: '0 0 10px rgba(34, 211, 238, 0.5)',
                    button: 'bg-cyan-500 hover:bg-cyan-400'
                };
        }
    };

    const theme = getColorClasses(currentProject.color);

    return (
        <section id="projects" className="py-24 bg-black relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
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

                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid lg:grid-cols-12 gap-12 items-center"
                        >

                            {/* LEFT: Image Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: "backOut" }}
                                className="lg:col-span-7 relative group perspective-1000"
                            >

                                <div className={`absolute -inset-4 bg-gradient-to-r ${getShadowColor(currentProject.color)} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`}></div>

                                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111113] aspect-video transform transition-all duration-700 ease-out group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-[1.02] shadow-2xl preserve-3d">

                                    <img
                                        src={currentProject.image}
                                        alt={currentProject.title}
                                        className="w-full h-full object-cover object-center"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-white/80">
                                        v1.0.0
                                    </div>


                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevProject(); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
                                    >
                                        <FaChevronLeft />
                                    </button>

                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextProject(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>
                            </motion.div>

                            {/* RIGHT: Project Details (5 cols) - Staggered Animation */}
                            <div className="lg:col-span-5 space-y-8">
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.2
                                            }
                                        }
                                    }}
                                >

                                    {/* Category Badge */}
                                    <motion.div
                                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                        className={`inline-block px-4 py-2 rounded-full border ${theme.badge} text-xs font-bold tracking-wider uppercase mb-4`}
                                    >
                                        {currentProject.category}
                                    </motion.div>

                                    {/* Title & Description */}
                                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                                        <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                                            {currentProject.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed text-lg">
                                            {currentProject.description}
                                        </p>
                                    </motion.div>

                                    {/* Key Features */}
                                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="space-y-3 mt-8">
                                        <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3">Key Features</h4>
                                        <div className="grid gap-2">
                                            {currentProject.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-white/80">
                                                    <FaCheckCircle className={`shrink-0 ${theme.text}`} />
                                                    <span
                                                        className="text-sm font-medium transition-all duration-300"
                                                        style={{
                                                            textShadow: theme.shadow
                                                        }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>


                                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="space-y-3 mt-8">
                                        <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {currentProject.techStack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 hover:bg-white/10 hover:border-white/30 transition-colors cursor-default">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>


                                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="flex items-center gap-4 pt-8">
                                        <a href={currentProject.liveLink} className={`flex-1 ${theme.button} text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105`}>
                                            <FaExternalLinkAlt /> Live Preview
                                        </a>
                                        <a href={currentProject.githubLink} className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105">
                                            <FaGithub size={20} /> GitHub
                                        </a>
                                    </motion.div>

                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-col items-center justify-center mt-20 gap-4"
                >

                    <div className="flex gap-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? `w-12 ${getActiveDotColor(projects[idx].color)}`
                                    : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="font-mono text-white/40 text-sm tracking-widest">
                        0{currentIndex + 1} <span className="text-white/20">/</span> 0{projects.length}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProjectsSection;
