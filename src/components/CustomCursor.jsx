import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth movement logic for the outer circle
    const springConfig = { damping: 20, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        const handleMouseOver = (e) => {
            const isClickable = e.target.closest('a, button, [role="button"]') ||
                e.target.classList.contains('cursor-pointer');

            setIsHovered(!!isClickable);
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Outer trailing circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
                    backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                    borderWidth: isHovered ? '2px' : '1px'
                }}
                transition={{ type: 'spring', damping: 10, stiffness: 200 }}
            />

            {/* Small center dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999]"
                style={{
                    translateX: mouseX,
                    translateY: mouseY,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isClicked ? 0.5 : isHovered ? 2 : 1,
                    backgroundColor: isHovered ? '#22d3ee' : '#ffffff'
                }}
            />
        </>
    );
};

export default CustomCursor;
