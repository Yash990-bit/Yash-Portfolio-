import React, { useState, useEffect, useRef } from 'react';

const TerminalLoader = ({ onComplete }) => {
    // State for multiple completed lines
    const [completedLines, setCompletedLines] = useState([]);
    // State for the line currently being typed
    const [currentLineText, setCurrentLineText] = useState('');
    // Index of the line currently being typed
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

    // Ref to handle typing intervals
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        // If we've gone past the last line, we are done.
        if (currentLineIndex >= bootSequence.length) {
            // "Instant" transition as requested (small delay for visual cleanup)
            const finishTimer = setTimeout(() => {
                onComplete();
            }, 100);
            return () => clearTimeout(finishTimer);
        }

        const targetLine = bootSequence[currentLineIndex];

        // Typing logic
        if (currentLineText.length < targetLine.length) {
            // Type next character
            // Random delay between 30ms and 60ms for "human/machine" typing feel
            // Not too slow, not too fast.
            const delay = Math.random() * 30 + 30;

            typingTimeoutRef.current = setTimeout(() => {
                setCurrentLineText(targetLine.slice(0, currentLineText.length + 1));
            }, delay);

        } else {
            // Line finished typing. Pause briefly before next line.
            const pauseDelay = 300; // Breath between lines

            typingTimeoutRef.current = setTimeout(() => {
                setCompletedLines(prev => [...prev, targetLine]);
                setCurrentLineText('');
                setCurrentLineIndex(prev => prev + 1);
            }, pauseDelay);
        }

        return () => {
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        };
    }, [currentLineIndex, currentLineText, bootSequence, onComplete]);


    // -- Matrix Background Effect (Unchanged) --
    useEffect(() => {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const chars = "01";
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono overflow-hidden">
            <canvas id="matrix-canvas" className="absolute inset-0 pointer-events-none" />

            {/* Centered Terminal Box */}
            <div className="relative z-10 w-[90%] max-w-2xl glass p-6 md:p-10 rounded-xl border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">session_id: 0xYASH</span>
                </div>

                <div className="space-y-2 min-h-[200px] flex flex-col items-center justify-center">
                    {/* Render Completed Lines */}
                    {completedLines.map((line, idx) => (
                        <div key={idx} className="text-white text-center font-medium tracking-wide">
                            {line}
                        </div>
                    ))}

                    {/* Render Current Typing Line */}
                    {currentLineIndex < bootSequence.length && (
                        <div className="flex items-center">
                            <span className="text-white text-center font-medium tracking-wide">
                                {currentLineText}
                            </span>
                            {/* Inline Blinking Cursor */}
                            <span className="w-2 h-4 bg-white animate-pulse ml-1 inline-block" />
                        </div>
                    )}
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] text-white/30 uppercase tracking-widest">
                    <span>System Status: Stable</span>
                    <span>Buffer: Typing...</span>
                </div>
            </div>

            <div className="absolute bottom-8 text-white/10 text-[10px] uppercase tracking-[1em] animate-pulse">
                Initializing Portfolio
            </div>
        </div>
    );
};

export default TerminalLoader;
