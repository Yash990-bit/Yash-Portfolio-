import React, { useState } from 'react';

const ProfileSection = () => {
    const [activeTab, setActiveTab] = useState('education');

    // Tech skills orbiting around avatar - using proper icons
    const skills = [
        { icon: '⚛️', name: 'React', color: '#61DAFB', position: { top: '5%', left: '50%' } },
        { icon: '🎯', name: 'TypeScript', color: '#3178C6', position: { top: '15%', left: '80%' } },
        { icon: '🔷', name: 'Tailwind', color: '#06B6D4', position: { top: '45%', left: '90%' } },
        { icon: '🟢', name: 'Node.js', color: '#339933', position: { top: '75%', left: '80%' } },
        { icon: '🐍', name: 'Python', color: '#3776AB', position: { top: '85%', left: '50%' } },
        { icon: '🔥', name: 'Firebase', color: '#FFCA28', position: { top: '75%', left: '20%' } },
        { icon: '🎨', name: 'Figma', color: '#F24E1E', position: { top: '45%', left: '10%' } },
        { icon: '📦', name: 'Docker', color: '#2496ED', position: { top: '15%', left: '20%' } },
    ];

    // LeetCode Stats
    const leetCodeStats = {
        rank: 1000,
        globalRank: 12000,
        badges: 41,
        reputation: 386,
        easy: { solved: 300, total: 1000, percent: 84 },
        medium: { solved: 350, total: 1000, percent: 92 },
        hard: { solved: 250, total: 1000, percent: 87 },
    };

    // GitHub Stats
    const githubStats = {
        grade: 'B-',
        stars: 18,
        commits: 332,
        prs: 22,
        issues: 45,
        contributions: 22,
        languages: [
            { name: 'Python', percent: 56.48, color: '#3572A5' },
            { name: 'HTML', percent: 1.68, color: '#E34C26' },
            { name: 'Jupyter Notebook', percent: 30.51, color: '#DA5B0B' },
            { name: 'JavaScript', percent: 1.6, color: '#F1E05A' },
        ],
    };

    // Education Data
    const education = [
        { years: '2015-2019', title: 'B.Tech, Computer Science', institution: 'Govt. Engineering College, Wayanad', grade: 'Secured 7.37 CGPA' },
        { years: '2013-2015', title: 'Higher Secondary', institution: 'Your Higher Secondary School', grade: 'Secured 9.1 CGPA' },
    ];

    const achievements = [
        { years: '2023', title: 'Hackathon Winner', institution: 'National Coding Competition', grade: '1st Place' },
        { years: '2022', title: 'Open Source Contributor', institution: 'Major OSS Project', grade: '50+ Contributions' },
    ];

    const currentData = activeTab === 'education' ? education : achievements;

    return (
        <section id="about" className="min-h-screen py-20 px-4 relative z-10 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Main Grid: Avatar Left, Stats Right */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">

                    {/* LEFT: Avatar with Orbiting Icons */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                            {/* Orbiting dashed circles */}
                            <div className="absolute inset-[15%] rounded-full border border-dashed border-white/10"></div>
                            <div className="absolute inset-[5%] rounded-full border border-dashed border-white/10"></div>

                            {/* Tech Icons - ORBITING CONTAINER */}
                            <div className="absolute inset-0 animate-spin-slow">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="absolute w-11 h-11 rounded-full flex items-center justify-center text-xl
                                                   bg-[#1a1a1e] border border-white/10 shadow-lg
                                                   hover:scale-110 transition-transform cursor-pointer animate-counter-spin"
                                        style={{
                                            top: skill.position.top,
                                            left: skill.position.left,
                                            transform: 'translate(-50%, -50%)',
                                            boxShadow: `0 0 15px ${skill.color}30`,
                                        }}
                                        title={skill.name}
                                    >
                                        {skill.icon}
                                    </div>
                                ))}
                            </div>

                            {/* Center Avatar - CYAN RING with RIPPLE */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                {/* Evaporating Ring - expands outward */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                                w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full
                                                border-2 border-cyan-400 animate-ripple"></div>

                                {/* Avatar Ring */}
                                <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full 
                                                bg-gradient-to-br from-cyan-400 to-cyan-500 p-[3px]">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                        {/* Replace with your actual image */}
                                        <span className="text-7xl">👨‍💻</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: LeetCode + GitHub Cards */}
                    <div className="space-y-6">
                        {/* LeetCode Card */}
                        <div className="bg-[#111113] rounded-2xl p-6 border border-white/5">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-xl">💻</span>
                                <h4 className="text-xl font-bold text-orange-400">LeetCode</h4>
                            </div>

                            {/* Stats Row */}
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

                            {/* Progress Bars */}
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
                        </div>

                        {/* GitHub Card */}
                        <div className="bg-[#111113] rounded-2xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">🐙</span>
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
                                    <span className="text-white/50">🐛 Total Issues:</span>
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
                        </div>
                    </div>
                </div>

                {/* BOTTOM: Education Timeline Card */}
                <div className="max-w-xl">
                    <div className="bg-[#111113] rounded-2xl p-6 border border-white/5">
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

                        {/* Timeline Items */}
                        <div className="space-y-6">
                            {currentData.map((item, index) => (
                                <div key={index} className="relative flex gap-4 items-start">
                                    {/* Timeline dot and line */}
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                                            ${activeTab === 'education'
                                                ? 'bg-cyan-500/10 border border-cyan-500/50'
                                                : 'bg-purple-500/10 border border-purple-500/50'}`}>
                                            <span>{activeTab === 'education' ? '🎓' : '🏆'}</span>
                                        </div>
                                        {index < currentData.length - 1 && (
                                            <div className="w-0.5 h-12 bg-white/10 mt-2"></div>
                                        )}
                                    </div>

                                    {/* Content */}
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
                                        <h4 className="font-bold text-white mb-0.5">{item.title}</h4>
                                        <p className="text-white/40 text-sm">{item.institution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProfileSection;
