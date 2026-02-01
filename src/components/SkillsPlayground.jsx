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
  { name: 'React', color: '#61DAFB' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Express.js', color: '#111111' },

  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },

  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },

  { name: 'Python', color: '#3776AB' },
  { name: 'Jupyter', color: '#F37626' },
  { name: 'Google Colab', color: '#F9AB00' },
  { name: 'Streamlit', color: '#FF4B4B' },
  { name: 'Kaggle', color: '#20BEFF' }, 

  { name: 'MongoDB', color: '#47A248' },
  { name: 'MySQL', color: '#4479A1' },

  { name: 'Git', color: '#F05032' },
  { name: 'GitHub', color: '#181717' },

  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Vercel', color: '#000000' },
  { name: 'Netlify', color: '#00C7B7' },

  { name: 'Figma', color: '#F24E1E' },
  { name: 'Vite', color: '#646CFF' }
];

const SkillsPlayground = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.1 }
    );

    if (sceneRef.current) observer.observe(sceneRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events
    } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;

    const container = sceneRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const render = Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
    });

    const wallOptions = { isStatic: true, render: { fillStyle: 'transparent' } };
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions);

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    const skillBodies = skills.map(skill =>
      Bodies.rectangle(
        Math.random() * (width - 100) + 50,
        -Math.random() * 400 - 50,
        140,
        140,
        {
          chamfer: { radius: 20 },
          restitution: 0.6,
          friction: 0.01,
          density: 0.04,
          render: { opacity: 0 },
          plugin: { skill }
        }
      )
    );

    Composite.add(engine.world, skillBodies);

    /* Mouse control */
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Events.on(render, 'afterRender', () => {
      const ctx = render.context;

      skillBodies.forEach(body => {
        const { position, angle } = body;
        const { skill } = body.plugin;

        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.rotate(angle);

        const size = 140;
        const r = 20;

        ctx.fillStyle = skill.color;
        ctx.beginPath();
        ctx.moveTo(-size / 2 + r, -size / 2);
        ctx.lineTo(size / 2 - r, -size / 2);
        ctx.quadraticCurveTo(size / 2, -size / 2, size / 2, -size / 2 + r);
        ctx.lineTo(size / 2, size / 2 - r);
        ctx.quadraticCurveTo(size / 2, size / 2, size / 2 - r, size / 2);
        ctx.lineTo(-size / 2 + r, size / 2);
        ctx.quadraticCurveTo(-size / 2, size / 2, -size / 2, size / 2 - r);
        ctx.lineTo(-size / 2, -size / 2 + r);
        ctx.quadraticCurveTo(-size / 2, -size / 2, -size / 2 + r, -size / 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = skill.name === 'JavaScript' ? '#000' : '#fff';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.name, 0, 0);

        ctx.restore();
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
    };
  }, [inView]);

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Skills <span className="text-cyan-400">Playground</span>
        </h2>
      </div>

      <div
        ref={sceneRef}
        className="w-full h-[600px] bg-[#050505] border-t border-b border-white/10"
      />
    </section>
  );
};

export default SkillsPlayground;
