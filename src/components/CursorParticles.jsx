import React, { useEffect, useRef } from 'react';

const CursorParticles = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const cursor = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Handle Resize
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Track Mouse
        const onMouseMove = (e) => {
            cursor.current.x = e.clientX;
            cursor.current.y = e.clientY;

            // Spawn a particle on move
            createParticle(e.clientX, e.clientY);
        };
        window.addEventListener('mousemove', onMouseMove);

        // Site Theme Colors: Cyan, Purple, White
        const themeColors = ['#22d3ee', '#a855f7', '#ffffff'];

        // Particle Class/Object logic
        const createParticle = (x, y) => {
            particles.current.push({
                x,
                y,
                size: Math.random() * 3 + 1, // Slightly smaller range 1-4px
                color: themeColors[Math.floor(Math.random() * themeColors.length)], // Random theme color
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                life: 1.0
            });
        };

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            // Update and draw particles
            particles.current.forEach((p, index) => {
                p.life -= 0.02; // Fade out speed
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.life <= 0) {
                    particles.current.splice(index, 1);
                } else {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = p.life;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            });

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[100]" // High z-index to sit on top
        />
    );
};

export default CursorParticles;
