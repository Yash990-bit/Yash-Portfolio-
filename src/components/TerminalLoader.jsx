import React, { useState, useEffect, useRef } from 'react';

const TerminalLoader = ({ onComplete }) => {
    const [completedLines, setCompletedLines] = useState([]);
    const [currentLineText, setCurrentLineText] = useState('');
    const [currentLineIndex, setCurrentLineIndex] = useState(0);

    const bootSequence = [
        "INITIALIZING_SYSTEM_CORE...",
        "LOADING_KERNEL_MODULES [OK]",
        "ESTABLISHING_ENCRYPTED_LINK... [CONNECTED]",
        "DECRYPTING_PORTFOLIO_DATA... [98%]",
        "BYPASSING_MAINFRAME_SECURITY... [ACCESS_GRANTED]",
        "LOADING_USER_INTERFACE...",
        "SYSTEM_STABLE. WELCOME_YASH."
    ];

    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        if (currentLineIndex >= bootSequence.length) {
            const timer = setTimeout(onComplete, 200);
            return () => clearTimeout(timer);
        }

        const targetLine = bootSequence[currentLineIndex];

        if (currentLineText.length < targetLine.length) {
            typingTimeoutRef.current = setTimeout(() => {
                setCurrentLineText(targetLine.slice(0, currentLineText.length + 1));
            }, Math.random() * 30 + 30);
        } else {
            typingTimeoutRef.current = setTimeout(() => {
                setCompletedLines(prev => [...prev, targetLine]);
                setCurrentLineText('');
                setCurrentLineIndex(prev => prev + 1);
            }, 300);
        }

        return () => typingTimeoutRef.current && clearTimeout(typingTimeoutRef.current);
    }, [currentLineIndex, currentLineText]);

    useEffect(() => {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const chars = "01";
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(0);

        const draw = () => {
            ctx.fillStyle = "rgba(0,0,0,0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "rgba(34,211,238,0.35)";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, y * fontSize);
                drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
            });
        };

        const interval = setInterval(draw, 50);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono overflow-hidden">
            <canvas id="matrix-canvas" className="absolute inset-0 pointer-events-none" />

            <div className="relative z-10 w-[90%] max-w-2xl glass p-6 md:p-10 rounded-xl
                border border-cyan-400/30
                shadow-[0_0_35px_rgba(34,211,238,0.35)]
                animate-pulse">

                <div className="flex items-center justify-between mb-8 border-b border-cyan-400/20 pb-4">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-cyan-400/40" />
                        <div className="w-3 h-3 rounded-full bg-cyan-400/40" />
                        <div className="w-3 h-3 rounded-full bg-cyan-400/40" />
                    </div>
                    <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">
                        session_id: 0xYASH
                    </span>
                </div>

                <div className="space-y-2 min-h-[200px] flex flex-col items-center justify-center">
                    {completedLines.map((line, idx) => (
                        <div
                            key={idx}
                            className="text-white text-center font-medium tracking-wide
                            animate-pulse
                            drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
                            {line}
                        </div>
                    ))}

                    {currentLineIndex < bootSequence.length && (
                        <div className="flex items-center">
                            <span className="text-white font-medium tracking-wide
                                animate-pulse
                                drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
                                {currentLineText}
                            </span>

                            <span className="w-2 h-4 bg-cyan-400 ml-1 inline-block
                                animate-pulse
                                drop-shadow-[0_0_8px_rgba(34,211,238,1)]" />
                        </div>
                    )}
                </div>

                <div className="mt-8 pt-4 border-t border-cyan-400/10 flex justify-between items-center
                    text-[9px] text-white/50 uppercase tracking-widest">
                    <span>System Status: Stable</span>
                    <span>Buffer: Typing...</span>
                </div>
            </div>

            <div className="absolute bottom-8 text-white/20 text-[10px]
                uppercase tracking-[1em] animate-pulse">
                Initializing Portfolio
            </div>
        </div>
    );
};

export default TerminalLoader;
