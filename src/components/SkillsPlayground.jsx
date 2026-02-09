import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Matter from 'matter-js';
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiFirebase,
  SiVite,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiJupyter,
  SiGooglescholar,
  SiStreamlit,
  SiMysql,
  SiKaggle
} from 'react-icons/si';

const skills = [
  { name: 'React', color: '#61DAFB', icon: SiReact },
  { name: 'Tailwind', color: '#38BDF8', icon: SiTailwindcss },
  { name: 'Node.js', color: '#339933', icon: SiNodedotjs },
  { name: 'Express', color: '#fff', icon: SiExpress },
  { name: 'JS', color: '#F7DF1E', icon: SiJavascript },
  { name: 'TS', color: '#3178C6', icon: SiTypescript },
  { name: 'HTML5', color: '#E34F26', icon: SiHtml5 },
  { name: 'CSS3', color: '#1572B6', icon: SiCss3 },
  { name: 'Python', color: '#3776AB', icon: SiPython },
  { name: 'Jupyter', color: '#F37626', icon: SiJupyter },
  { name: 'Colab', color: '#F9AB00', icon: SiGooglescholar },
  { name: 'Streamlit', color: '#FF4B4B', icon: SiStreamlit },
  { name: 'Kaggle', color: '#20BEFF', icon: SiKaggle },
  { name: 'MongoDB', color: '#47A248', icon: SiMongodb },
  { name: 'MySQL', color: '#4479A1', icon: SiMysql },
  { name: 'Git', color: '#F05032', icon: SiGit },
  { name: 'GitHub', color: '#fff', icon: SiGithub },
  { name: 'Firebase', color: '#FFCA28', icon: SiFirebase },
  { name: 'Vercel', color: '#fff', icon: SiVercel },
  { name: 'Netlify', color: '#00C7B7', icon: SiNetlify },
  { name: 'Figma', color: '#F24E1E', icon: SiFigma },
  { name: 'Vite', color: '#646CFF', icon: SiVite }
];

const SkillsPlayground = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const itemsRef = useRef([]);
  const resizeHandlerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    if (sceneRef.current) observer.observe(sceneRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const container = sceneRef.current;
    if (!container) return;

    const setupPhysics = () => {
      const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

      const width = container.clientWidth;
      const height = container.clientHeight;

      if (width === 0 || height === 0) return false;

      // 1. Setup Engine
      const engine = Engine.create();
      engineRef.current = engine;
      const world = engine.world;
      world.gravity.y = 0.8; // Slowed down from 1.2

      // 2. Create Boundaries
      const wallOptions = { isStatic: true, render: { visible: false } };
      const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
      const leftWall = Bodies.rectangle(-50, height / 2, 100, height, wallOptions);
      const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions);
      Composite.add(world, [ground, leftWall, rightWall]);

      // 3. Create Bodies
      const size = 120; // Increased from 100
      const bodies = skills.map((_, i) => {
        const body = Bodies.rectangle(
          Math.random() * (width - size) + size / 2,
          -Math.random() * 1500 - 200, // Spawn high up
          size,
          size,
          {
            chamfer: { radius: 15 },
            restitution: 0.6,
            friction: 0.1,
            frictionAir: 0.03 // Increased from 0.01 for slower/smoother fall
          }
        );

        // Add subtle initial velocity and spin
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 3,
          y: Math.random() * 3
        });
        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);

        return body;
      });
      Composite.add(world, bodies);

      // 4. Mouse
      const mouse = Mouse.create(container);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          damping: 0.1,
          render: { visible: false }
        }
      });
      Composite.add(world, mouseConstraint);

      // Prevent scrolling while interacting
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      // 5. Runner
      const runner = Runner.create();
      Runner.run(runner, engine);

      // 6. Sync Loop
      let animationFrameId;
      const sync = () => {
        bodies.forEach((body, i) => {
          const dom = itemsRef.current[i];
          if (dom) {
            const { x, y } = body.position;
            dom.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px) rotate(${body.angle}rad)`;
          }
        });
        animationFrameId = requestAnimationFrame(sync);
      };
      sync();

      // 7. Cleanup & Resize handlers
      const handleResize = () => {
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        Matter.Body.setPosition(ground, { x: newW / 2, y: newH + 50 });
        Matter.Body.setPosition(leftWall, { x: -50, y: newH / 2 });
        Matter.Body.setPosition(rightWall, { x: newW + 50, y: newH / 2 });
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        Runner.stop(runner);
        Engine.clear(engine);
        Composite.clear(world, false);
      };
    };

    let cleanupFn = setupPhysics();
    if (!cleanupFn) {
      const interval = setInterval(() => {
        cleanupFn = setupPhysics();
        if (cleanupFn) clearInterval(interval);
      }, 100);
      return () => {
        clearInterval(interval);
        if (cleanupFn) cleanupFn();
      };
    }

    return cleanupFn;
  }, [inView]);

  return (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4">Skills</h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Interactive <span className="text-white/40">Playground</span>
        </h3>
        <p className="text-white/40 mt-6 max-w-lg mx-auto uppercase text-[10px] tracking-widest">
          Drag, throw, and explore technical expertise
        </p>
      </div>

      <div
        ref={sceneRef}
        className="relative w-full h-[600px] bg-black/50 border-y border-white/5 cursor-grab active:cursor-grabbing overflow-hidden"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            ref={el => itemsRef.current[i] = el}
            className="absolute top-0 left-0 w-[120px] h-[120px] flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-xl pointer-events-none select-none transition-shadow duration-300"
            style={{ boxShadow: `0 0 20px -5px ${skill.color}30` }}
          >
            <skill.icon className="text-4xl mb-3" style={{ color: skill.color }} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/70">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPlayground;
