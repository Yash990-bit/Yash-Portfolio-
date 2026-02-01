import React from 'react';

const StatsSection = () => {
    // LeetCode Stats (you can replace with real data later)
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
        grade: 'B+',
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

    return (
        <section className="py-20 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-4 text-center">
                    Coding Stats
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    My <span className="text-purple-500">Progress</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* LeetCode Card */}
                    <div className="glass rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl">💻</span>
                            <h4 className="text-2xl font-bold text-orange-400">LeetCode</h4>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-4 gap-4 mb-8">
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                                <div className="text-2xl font-bold text-cyan-400">{leetCodeStats.rank}</div>
                                <div className="text-xs text-white/50 uppercase">Rank</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                                <div className="text-lg font-bold text-white/80">{leetCodeStats.globalRank.toLocaleString()}</div>
                                <div className="text-xs text-white/50 uppercase">Global</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                                <div className="text-lg font-bold text-white/80">{leetCodeStats.badges}</div>
                                <div className="text-xs text-white/50 uppercase">Badges</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                                <div className="text-lg font-bold text-white/80">{leetCodeStats.reputation}</div>
                                <div className="text-xs text-white/50 uppercase">Rep</div>
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-green-400">Easy</span>
                                    <span className="text-white/50">{leetCodeStats.easy.solved}/{leetCodeStats.easy.total} Beats: {leetCodeStats.easy.percent}%</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${leetCodeStats.easy.percent}%` }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-yellow-400">Medium</span>
                                    <span className="text-white/50">{leetCodeStats.medium.solved}/{leetCodeStats.medium.total} Beats: {leetCodeStats.medium.percent}%</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${leetCodeStats.medium.percent}%` }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-red-400">Hard</span>
                                    <span className="text-white/50">{leetCodeStats.hard.solved}/{leetCodeStats.hard.total} Beats: {leetCodeStats.hard.percent}%</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${leetCodeStats.hard.percent}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GitHub Card */}
                    <div className="glass rounded-2xl p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🐙</span>
                                <h4 className="text-2xl font-bold text-white">Github</h4>
                            </div>
                            {/* Grade Badge */}
                            <div className="w-14 h-14 rounded-full border-4 border-purple-500 flex items-center justify-center">
                                <span className="text-lg font-bold text-purple-400">{githubStats.grade}</span>
                            </div>
                        </div>

                        {/* Stats List */}
                        <div className="space-y-3 mb-8">
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/60 flex items-center gap-2">⭐ Total Stars Earned:</span>
                                <span className="font-bold">{githubStats.stars}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/60 flex items-center gap-2">📝 Total Commits:</span>
                                <span className="font-bold">{githubStats.commits}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/60 flex items-center gap-2">🔀 Total PRs:</span>
                                <span className="font-bold">{githubStats.prs}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/60 flex items-center gap-2">🐛 Total Issues:</span>
                                <span className="font-bold">{githubStats.issues}</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-white/60 flex items-center gap-2">📅 Contributed (last year):</span>
                                <span className="font-bold">{githubStats.contributions}</span>
                            </div>
                        </div>

                        {/* Language Breakdown */}
                        <div className="flex flex-wrap gap-4">
                            {githubStats.languages.map(lang => (
                                <div key={lang.name} className="flex items-center gap-2 text-sm">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }}></span>
                                    <span className="text-white/70">{lang.name}</span>
                                    <span className="text-white/40">{lang.percent}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StatsSection;
