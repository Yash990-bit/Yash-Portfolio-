import React, { useEffect, useRef, useState } from 'react';
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
  const bodiesRef = useRef([]); // To store physics bodies
  const itemsRef = useRef([]); // To store DOM elements
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

    if (sceneRef.current) observer.observe(sceneRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const { Engine, World, Bodies, Mouse, MouseConstraint, Composite, Runner, Events } = Matter;

    // 1. Setup Engine
    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const container = sceneRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 2. Create Boundaries
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions);

    Composite.add(world, [ground, leftWall, rightWall]);

    // 3. Create Bodies for each Skill
    const newBodies = skills.map(() => {
      return Bodies.rectangle(
        Math.random() * (width - 100) + 50, // Random X
        -Math.random() * 500 - 50,          // Random Y (above screen)
        120, // Width (Updated sizing)
        120, // Height
        {
          chamfer: { radius: 10 },
          restitution: 0.6,
          friction: 0.01,
          frictionAir: 0.02,
        }
      );
    });

    bodiesRef.current = newBodies;
    Composite.add(world, newBodies);

    // 4. Mouse Control
    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false }
      }
    });
    Composite.add(world, mouseConstraint);

    // Remove mouse wheel capture
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    // 5. Sync Loop
    const runner = Runner.create();
    Runner.run(runner, engine);

    let animationFrameId;

    const updateLoop = () => {
      if (!itemsRef.current.length) return;

      newBodies.forEach((body, index) => {
        const domNode = itemsRef.current[index];
        if (domNode) {
          const { x, y } = body.position;
          const angle = body.angle;
          // Directly updating transform for performance (offset by half width/height)
          domNode.style.transform = `translate(${x - 60}px, ${y - 60}px) rotate(${angle}rad)`;
        }
      });
      animationFrameId = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      Engine.clear(engine);
      Composite.clear(world);
    };
  }, [inView]);

  return (
    <section className="py-20 bg-[#050505] text-white relative overflow-hidden" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Skills <span className="text-cyan-400">Playground</span>
        </h2>
        <p className="text-gray-400 mt-4">Drag and throw the blocks!</p>
      </div>

      <div
        ref={sceneRef}
        className="w-full h-[600px] relative bg-black/50 border-t border-b border-white/10 overflow-hidden cursor-grab active:cursor-grabbing"
      >
        {/* Render DOM Elements synced to Physics */}
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="absolute top-0 left-0 w-[120px] h-[120px] rounded-2xl flex flex-col items-center justify-center gap-3 shadow-lg select-none will-change-transform border border-white/10"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)', // Dark Glass
              backdropFilter: 'blur(5px)',
              boxShadow: `0 0 20px -5px ${skill.color}40`, // Colored Glow
              zIndex: 10
            }}
          >
            {/* Colored Icon - The "Logo" */}
            <skill.icon className="text-4xl" style={{ color: skill.color }} />

            <span className="text-xs font-bold uppercase tracking-wide text-white/80">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPlayground;
