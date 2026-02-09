import React, { useState } from 'react';
import yashImage from '../assets/yash.png'
import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiExpress,
    SiMongodb,
    SiJavascript,
    SiHtml5,
    SiCss3
} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';

const ProfileSection = () => {
    const [activeTab, setActiveTab] = useState('education');

    const skills = [
        { icon: SiReact, name: 'React', color: '#61DAFB', position: { top: '5%', left: '50%' } },
        { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', position: { top: '15%', left: '80%' } },
        { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4', position: { top: '45%', left: '90%' } },
        { icon: SiNodedotjs, name: 'Node.js', color: '#339933', position: { top: '75%', left: '80%' } },
        { icon: SiExpress, name: 'Express.js', color: '#ffffff', position: { top: '85%', left: '65%' } },
        { icon: SiMongodb, name: 'MongoDB', color: '#47A248', position: { top: '85%', left: '35%' } },
        { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', position: { top: '75%', left: '20%' } },
        { icon: SiPython, name: 'Python', color: '#3776AB', position: { top: '45%', left: '10%' } },
        { icon: SiHtml5, name: 'HTML5', color: '#E34F26', position: { top: '25%', left: '10%' } },
        { icon: SiCss3, name: 'CSS3', color: '#1572B6', position: { top: '25%', left: '90%' } },
    ];

    const leetCodeStats = {
        rank: 841127,
        globalRank: 342845,
        badges: 1,
        reputation: 277,
        easy: { solved: 112, total: 924, percent: 91 },
        medium: { solved: 62, total: 2001, percent: 77 },
        hard: { solved: 1, total: 905, percent: 0 },
    };

    const githubStats = {
        grade: 'C-',
        stars: 0,
        commits: 109,
        issues: 13,
        prs: 2,
        contributions: 160,
        languages: [
            { name: 'JavaScript', percent: 64.35, color: '#F1E05A' },
            { name: 'HTML', percent: 11.72, color: '#E34C26' },
            { name: 'CSS', percent: 23.93, color: '#DA5B0B' },
        ],
    };

    const education = [
        { years: '2024-2028', title: 'B.Tech, Computer Science AI', institution: 'Rishihood University – Newton School of Technology' },
        { years: '2022-2023', title: 'Higher Secondary', institution: 'DD - Model School' },
        { years: '2020-2021', title: 'Secondary School', institution: 'Sunbeam School' }
    ];

    const achievements = [
        { years: '2025', title: 'Open Source Contributor', institution: 'Hactober Fest' },
    ]

    const currentData = activeTab === 'education' ? education : achievements;

    return (
        <section id="about" className="min-h-screen py-20 px-4 relative z-10 bg-black">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-8 mb-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center"
                    >
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center">

                            <div className="absolute inset-[15%] rounded-full border border-dashed border-white/10"></div>
                            <div className="absolute inset-[5%] rounded-full border border-dashed border-white/10"></div>

                            <div className="absolute inset-0 animate-spin-slow">
                                {skills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    const total = skills.length;
                                    const angle = (index / total) * 2 * Math.PI;
                                    const radius = 160;

                                    const x = 50 + (radius * Math.cos(angle)) / 4;
                                    const y = 50 + (radius * Math.sin(angle)) / 4;

                                    return (
                                        <div
                                            key={skill.name}
                                            className="absolute w-11 h-11 rounded-full flex items-center justify-center
                                    bg-[#1a1a1e] border border-white/10 shadow-lg
                                    hover:scale-110 transition-transform cursor-pointer
                                    animate-counter-spin"
                                            style={{
                                                top: `${y}%`,
                                                left: `${x}%`,
                                                transform: 'translate(-50%, -50%)',
                                                boxShadow: `0 0 15px ${skill.color}40`,
                                            }}
                                            title={skill.name}
                                        >
                                            <Icon size={22} color={skill.color} />
                                        </div>
                                    );
                                })}
                            </div>


                            <div className="relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full border-2 border-cyan-400 animate-ripple"
                                    ></div>
                                </div>

                                <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 p-[3px]">

                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                        <img
                                            src={yashImage}
                                            alt="My Profile"
                                            className="w-[105%] h-[105%] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { staggerChildren: 0.2, duration: 0.8 }
                            }
                        }}
                        className="space-y-6"
                    >

                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-[#111113] rounded-2xl p-6 border border-white/5">
                            <div className="flex items-center gap-3 mb-5">
                                <a href="https://leetcode.com/u/yash_ragh_08/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-xl">💻</span>
                                </a>
                                <h4 className="text-xl font-bold text-orange-400">LeetCode</h4>
                            </div>

                            <div className="grid grid-cols-4 gap-3 mb-6">
                                <div className="text-center p-3 rounded-lg border border-cyan-500/30">
                                    <div className="text-2xl font-bold text-cyan-400">{leetCodeStats.rank}</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wide">Rank</div>
                                </div>
                                <div className="text-center p-3 bg-white/5 rounded-lg">
                                    <div className="text-lg font-bold">{leetCodeStats.globalRank.toLocaleString()}</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wide">Rank</div>
                                </div>
                                <div className="text-center p-3 bg-white/5 rounded-lg">
                                    <div className="text-lg font-bold">{leetCodeStats.badges}</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wide">Badges</div>
                                </div>
                                <div className="text-center p-3 bg-white/5 rounded-lg">
                                    <div className="text-lg font-bold">{leetCodeStats.reputation}</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wide">Reputation</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-green-400 font-medium">Easy</span>
                                        <span className="text-white/40">{leetCodeStats.easy.solved}/{leetCodeStats.easy.total} Beats: {leetCodeStats.easy.percent}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${leetCodeStats.easy.percent}%` }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-yellow-400 font-medium">Medium</span>
                                        <span className="text-white/40">{leetCodeStats.medium.solved}/{leetCodeStats.medium.total} Beats: {leetCodeStats.medium.percent}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${leetCodeStats.medium.percent}%` }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-red-400 font-medium">Hard</span>
                                        <span className="text-white/40">{leetCodeStats.hard.solved}/{leetCodeStats.hard.total} Beats: {leetCodeStats.hard.percent}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${leetCodeStats.hard.percent}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-[#111113] rounded-2xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <a href="https://github.com/Yash990-bit" target="_blank" rel="noopener noreferrer">
                                        <SiGithub className="text-xl text-white" />
                                    </a>
                                    <h4 className="text-xl font-bold">Github</h4>
                                </div>
                                <div className="w-12 h-12 rounded-full border-[3px] border-purple-500 flex items-center justify-center">
                                    <span className="text-sm font-bold text-purple-400">{githubStats.grade}</span>
                                </div>
                            </div>

                            <div className="space-y-2 mb-5 text-sm">
                                <div className="flex justify-between py-1.5 border-b border-white/5">
                                    <span className="text-white/50">⭐ Total Stars Earned:</span>
                                    <span className="font-semibold">{githubStats.stars}</span>
                                </div>
                                <div className="flex justify-between py-1.5 border-b border-white/5">
                                    <span className="text-white/50">📝 Total Commits:</span>
                                    <span className="font-semibold">{githubStats.commits}</span>
                                </div>
                                <div className="flex justify-between py-1.5 border-b border-white/5">
                                    <span className="text-white/50">🔀 Total PRs:</span>
                                    <span className="font-semibold">{githubStats.prs}</span>
                                </div>
                                <div className="flex justify-between py-1.5 border-b border-white/5">
                                    <span className="text-white/50">Total Issues:</span>
                                    <span className="font-semibold">{githubStats.issues}</span>
                                </div>
                                <div className="flex justify-between py-1.5">
                                    <span className="text-white/50">📅 Contributed to (last year):</span>
                                    <span className="font-semibold">{githubStats.contributions}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                                {githubStats.languages.map(lang => (
                                    <div key={lang.name} className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }}></span>
                                        <span className="text-white/60">{lang.name}</span>
                                        <span className="text-white/30">{lang.percent}%</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#111113] rounded-2xl p-6 border border-white/5"
                    >
                        {/* Tabs */}
                        <div className="flex gap-6 mb-6 border-b border-white/10 pb-3">
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`flex items-center gap-2 text-sm font-medium transition-colors
                                    ${activeTab === 'education' ? 'text-cyan-400' : 'text-white/40 hover:text-white/60'}`}
                            >
                                🎓 Education
                            </button>
                            <button
                                onClick={() => setActiveTab('achievements')}
                                className={`flex items-center gap-2 text-sm font-medium transition-colors
                                    ${activeTab === 'achievements' ? 'text-purple-400' : 'text-white/40 hover:text-white/60'}`}
                            >
                                🏆 Achievements
                            </button>
                        </div>


                        <div className="space-y-6">
                            <AnimatePresence mode="wait">
                                {currentData.map((item, index) => (
                                    <motion.div
                                        key={`${activeTab}-${index}`}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.15,
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 12
                                        }}
                                        className="relative flex gap-4 items-start group"
                                    >

                                        <div className="flex flex-col items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110
                                            ${activeTab === 'education'
                                                    ? 'bg-cyan-500/10 border border-cyan-500/50'
                                                    : 'bg-purple-500/10 border border-purple-500/50'}`}>
                                                <span>{activeTab === 'education' ? '🎓' : '🏆'}</span>
                                            </div>
                                            {index < currentData.length - 1 && (
                                                <div className="w-0.5 h-12 bg-white/10 mt-2 group-hover:bg-white/20 transition-colors"></div>
                                            )}
                                        </div>

                                        <div className="pt-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold
                                                ${activeTab === 'education'
                                                        ? 'bg-cyan-500/20 text-cyan-400'
                                                        : 'bg-purple-500/20 text-purple-400'}`}>
                                                    {item.years}
                                                </span>
                                                <span className="text-white/40 text-xs">• {item.grade}</span>
                                            </div>
                                            <h4 className="font-bold text-white mb-0.5 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                                            <p className="text-white/40 text-sm">{item.institution}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ProfileSection;
