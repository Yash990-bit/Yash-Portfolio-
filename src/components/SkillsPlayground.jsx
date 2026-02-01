import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import {
    SiReact, SiTailwindcss, SiNodedotjs, SiTypescript,
    SiJavascript, SiHtml5, SiCss3, SiPython, SiMongodb,
    SiPostgresql, SiDocker, SiGit, SiFigma, SiFirebase,
    SiNextdotjs, SiGraphql, SiRedis, SiVite
} from 'react-icons/si';

const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#3178C6' }, 
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' }
];

const SkillsPlayground = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sceneRef.current) {
            observer.observe(sceneRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;


        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Events = Matter.Events;
        const engine = Engine.create();
        engineRef.current = engine;

        const container = sceneRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const render = Render.create({
            element: container,
            engine: engine,
            options: {
                width,
                height,
                background: 'transparent',
                wireframes: false,
                pixelRatio: window.devicePixelRatio
            }
        });


        const wallOptions = {
            isStatic: true,
            render: { fillStyle: 'transparent' }
        };

        const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height, wallOptions);
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions);

        Composite.add(engine.world, [ground, leftWall, rightWall]);


        const skillBodies = skills.map((skill, index) => {
            const x = Math.random() * (width - 100) + 50;
            const y = -Math.random() * 500 - 50;

            return Bodies.rectangle(x, y, 140, 140, {
                chamfer: { radius: 20 },
                restitution: 0.6,
                friction: 0.005,
                density: 0.04,
                render: {

                    opacity: 0
                },
                plugin: {
                    skillData: skill
                }
            });
        });

        Composite.add(engine.world, skillBodies);

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Composite.add(engine.world, mouseConstraint);

        render.mouse = mouse;


        Events.on(render, 'afterRender', () => {
            const context = render.context;

            skillBodies.forEach(body => {
                const { position, angle } = body;
                const { skillData } = body.plugin;

                context.save();
                context.translate(position.x, position.y);
                context.rotate(angle);


                const size = 140;
                context.fillStyle = skillData.color;

                const r = 20;
                const w = size;
                const h = size;

                context.beginPath();
                context.moveTo(-w / 2 + r, -h / 2);
                context.lineTo(w / 2 - r, -h / 2);
                context.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
                context.lineTo(w / 2, h / 2 - r);
                context.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
                context.lineTo(-w / 2 + r, h / 2);
                context.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
                context.lineTo(-w / 2, -h / 2 + r);
                context.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
                context.closePath();

                context.fill();


                context.fillStyle = skillData.name === 'Next.js' ? '#000' : '#FFF'; 
                context.font = 'bold 20px "Inter", sans-serif';
                context.textAlign = 'center';
                context.textBaseline = 'middle';



                context.fillText(skillData.name, 0, 0);

                context.restore();
            });
        });

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            Composite.clear(engine.world);
            Engine.clear(engine);
            render.canvas.remove();
            render.canvas = null;
            render.context = null;
            render.textures = {};
        };
    }, [inView]);


    return (
        <section className="py-20 relative z-10 overflow-hidden bg-black text-white">
            <div className="absolute inset-0 bg-transparent"></div>

            <div className="container mx-auto px-4 mb-8 text-center relative z-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Skills <span className="text-cyan-400">Playground</span>
                </h2>
            </div>

            <div
                ref={sceneRef}
                className="w-full h-[600px] border-t border-b border-white/5 bg-[#050505] relative cursor-default"
            >
            </div>
        </section>
    );
};

export default SkillsPlayground;
