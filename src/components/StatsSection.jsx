import React from 'react';
import leetcodeLogo from '../assets/leetcode_logo.png';
import githubLogo from '../assets/github_logo.svg';

const StatsSection = () => {
    const leetCodeStats = {
        rank: 840369,
        globalRank: 342845,
        badges: 1,
        reputation: 277,
        easy: { solved: 112, total: 1000, percent: 91 },
        medium: { solved: 62, total: 2000, percent: 77 },
        hard: { solved: 1, total: 905, percent: 0 },
    };

    const githubStats = {
        grade: 'B+',
        stars: 18,
        commits: 332,
        prs: 22,
        issues: 45,
        contributions: 22,
        languages: [
            { name: 'JavaScript', percent: 64.3, color: '#3572A5' },
            { name: 'HTML', percent: 11.72, color: '#E34C26' },
            { name: 'CSS', percent: 23.93, color: '#F1E05A' },
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

                    {/* LeetCode */}
                    <div className="glass rounded-2xl p-6 md:p-8">
                        <a
                            href="https://leetcode.com/u/yashraghubanshi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity w-fit"
                        >
                            <img src={leetcodeLogo} alt="LeetCode" className="w-10 h-10" />
                            <h4 className="text-2xl font-bold text-orange-400">LeetCode</h4>
                        </a>

                        <div className="grid grid-cols-4 gap-4 mb-8">
                            <StatBox label="Rank" value={leetCodeStats.rank} highlight />
                            <StatBox label="Global" value={leetCodeStats.globalRank.toLocaleString()} />
                            <StatBox label="Badges" value={leetCodeStats.badges} />
                            <StatBox label="Rep" value={leetCodeStats.reputation} />
                        </div>

                        <Progress label="Easy" color="green" data={leetCodeStats.easy} />
                        <Progress label="Medium" color="yellow" data={leetCodeStats.medium} />
                        <Progress label="Hard" color="red" data={leetCodeStats.hard} />
                    </div>

                    {/* GitHub */}
                    <div className="glass rounded-2xl p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <a
                                href="https://github.com/yashraghubanshi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                            >
                                <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
                                <h4 className="text-2xl font-bold text-white">GitHub</h4>
                            </a>

                            <div className="w-14 h-14 rounded-full border-4 border-purple-500 flex items-center justify-center">
                                <span className="text-lg font-bold text-purple-400">{githubStats.grade}</span>
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            <Row label="⭐ Total Stars" value={githubStats.stars} />
                            <Row label="📝 Commits" value={githubStats.commits} />
                            <Row label="🔀 PRs" value={githubStats.prs} />
                            <Row label="🐛 Issues" value={githubStats.issues} />
                            <Row label="📅 Last Year" value={githubStats.contributions} />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {githubStats.languages.map(lang => (
                                <div key={lang.name} className="flex items-center gap-2 text-sm">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
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

/* Helper Components */
const StatBox = ({ label, value, highlight }) => (
    <div className="text-center p-3 bg-white/5 rounded-lg">
        <div className={`text-lg font-bold ${highlight ? 'text-cyan-400 text-2xl' : 'text-white/80'}`}>
            {value}
        </div>
        <div className="text-xs text-white/50 uppercase">{label}</div>
    </div>
);

const Progress = ({ label, color, data }) => (
    <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
            <span className={`text-${color}-400`}>{label}</span>
            <span className="text-white/50">
                {data.solved}/{data.total} Beats: {data.percent}%
            </span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className={`h-full bg-${color}-500`} style={{ width: `${data.percent}%` }} />
        </div>
    </div>
);

const Row = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-white/5">
        <span className="text-white/60">{label}</span>
        <span className="font-bold">{value}</span>
    </div>
);

export default StatsSection;
