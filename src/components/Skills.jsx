import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Shield } from 'lucide-react';

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -12; // rotateX
    const ry = ((x / rect.width) - 0.5) * 12;   // rotateY
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="transition-transform duration-200 will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5 backdrop-blur hover:border-white/20"
  >
    <div className="mb-3 flex items-center gap-3">
      <div className="rounded-lg bg-white/10 p-2"><Icon className="h-5 w-5 text-violet-300" /></div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
        >
          {item}
        </span>
      ))}
    </div>
    {/* Shine */}
    <motion.div
      initial={{ x: '-120%' }}
      whileHover={{ x: '120%' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 rotate-6 bg-gradient-to-b from-white/15 to-transparent"
    />
  </motion.div>
);

const Skills = () => {
  return (
    <section className="relative w-full bg-zinc-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TiltCard>
            <SkillCard icon={Code} title="Languages" items={["Python", "Java", "SQL", "JavaScript", "C++"]} />
          </TiltCard>
          <TiltCard>
            <SkillCard icon={Brain} title="AI/ML" items={["TensorFlow", "scikit-learn", "LangChain", "LangGraph", "CrewAI", "Ollama"]} />
          </TiltCard>
          <TiltCard>
            <SkillCard icon={Shield} title="Backend" items={["FastAPI", "Flask", "REST APIs", "JWT Auth", "WebSockets"]} />
          </TiltCard>
          <TiltCard>
            <SkillCard icon={Database} title="Databases & Tools" items={["PostgreSQL", "SQLite", "Tortoise ORM", "Git", "Postman", "Jupyter", "GroqCloud"]} />
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
