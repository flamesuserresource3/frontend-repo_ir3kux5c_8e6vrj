import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Shield } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5 backdrop-blur hover:border-white/20"
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
          <SkillCard
            icon={Code}
            title="Languages"
            items={["Python", "Java", "SQL", "JavaScript", "C++"]}
          />
          <SkillCard
            icon={Brain}
            title="AI/ML"
            items={["TensorFlow", "scikit-learn", "LangChain", "LangGraph", "CrewAI", "Ollama"]}
          />
          <SkillCard
            icon={Shield}
            title="Backend"
            items={["FastAPI", "Flask", "REST APIs", "JWT Auth", "WebSockets"]}
          />
          <SkillCard
            icon={Database}
            title="Databases & Tools"
            items={["PostgreSQL", "SQLite", "Tortoise ORM", "Git", "Postman", "Jupyter", "GroqCloud"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
