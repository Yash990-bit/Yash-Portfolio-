import React, { useState } from 'react';

const EducationSection = () => {
    const [activeTab, setActiveTab] = useState('education');

    const education = [
        {
            years: '2020-2024',
            title: 'B.Tech, Computer Science',
            institution: 'Your Engineering College',
            grade: 'CGPA: 8.5',
        },
        {
            years: '2018-2020',
            title: 'Higher Secondary',
            institution: 'Your Higher Secondary School',
            grade: 'Percentage: 92%',
        },
        {
            years: '2016-2018',
            title: 'Secondary Education',
            institution: 'Your Secondary School',
            grade: 'Percentage: 95%',
        },
    ];

    const achievements = [
        {
            years: '2023',
            title: 'Hackathon Winner',
            institution: 'National Coding Competition',
            grade: '1st Place',
        },
        {
            years: '2022',
            title: 'Open Source Contributor',
            institution: 'Major Open Source Project',
            grade: '50+ Contributions',
        },
        {
            years: '2021',
            title: 'Coding Excellence Award',
            institution: 'College Tech Fest',
            grade: 'Gold Medal',
        },
    ];

    const currentData = activeTab === 'education' ? education : achievements;

    return (
        <section id="education" className="py-20 px-4 relative z-10 bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="glass rounded-full p-1 flex gap-2">
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all
                                ${activeTab === 'education'
                                    ? 'bg-cyan-500 text-black'
                                    : 'text-white/60 hover:text-white'}`}
                        >
                            🎓 Education
                        </button>
                        <button
                            onClick={() => setActiveTab('achievements')}
                            className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all
                                ${activeTab === 'achievements'
                                    ? 'bg-purple-500 text-white'
                                    : 'text-white/60 hover:text-white'}`}
                        >
                            🏆 Achievements
                        </button>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {currentData.map((item, index) => (
                            <div key={index} className="relative flex gap-8 items-start">
                                {/* Dot */}
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center z-10 shrink-0
                                    ${activeTab === 'education'
                                        ? 'bg-cyan-500/20 border-2 border-cyan-500'
                                        : 'bg-purple-500/20 border-2 border-purple-500'}`}>
                                    <span className="text-2xl">{activeTab === 'education' ? '🎓' : '🏆'}</span>
                                </div>

                                {/* Card */}
                                <div className="glass rounded-xl p-6 flex-1 hover:bg-white/5 transition-all">
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold
                                            ${activeTab === 'education'
                                                ? 'bg-cyan-500/20 text-cyan-400'
                                                : 'bg-purple-500/20 text-purple-400'}`}>
                                            {item.years}
                                        </span>
                                        <span className="text-white/50 text-sm">{item.grade}</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                    <p className="text-white/50">{item.institution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EducationSection;
