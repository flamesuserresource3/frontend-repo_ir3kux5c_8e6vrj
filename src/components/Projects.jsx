import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CodeMITRA — Local AI Coding Assistant',
    desc:
      'A stateful code teaching assistant powered by Qwen2.5-Coder via Ollama with a Gradio chat UI. Understands code context, explains logic, and generates fixes.',
    link: 'https://github.com/sourabhsp23/ollama-project',
    tags: ['Ollama', 'Qwen2.5-Coder', 'Gradio', 'Python'],
  },
  {
    title: 'Multi-Agent Research Assistant',
    desc:
      'Cooperating agents that research topics, extract insights, summarize web data, and produce markdown reports using Groq LLaMA 3.1-8B.',
    link: 'https://github.com/sourabhsp23/research-agent-.git',
    tags: ['Groq', 'CrewAI', 'Streamlit', 'LangChain'],
  },
  {
    title: 'Gemstone Price Predictor',
    desc:
      'End-to-end ML pipeline with data preprocessing, model training, and a Flask web interface. Achieved ~93% accuracy.',
    link: 'https://github.com/sourabhsp23/gemstone_price_predictor.git',
    tags: ['Flask', 'scikit-learn', 'Pandas'],
  },
  {
    title: 'E2E Encryption Messaging (FastAPI)',
    desc:
      'Secure real-time messaging with RSA + AES hybrid encryption, JWT auth, WebSockets, and SQLite persistence.',
    link: 'https://github.com/sourabhsp23/e2ee',
    tags: ['FastAPI', 'WebSockets', 'JWT', 'Crypto'],
  },
  {
    title: 'File Compression API — Huffman Coding',
    desc:
      'REST API that compresses & decompresses files using Huffman coding, with compression ratio reporting and server-side management.',
    link: 'https://github.com/sourabhsp23/filecompression',
    tags: ['Python', 'Algorithms', 'API'],
  },
];

const ProjectCard = ({ p, i }) => (
  <motion.a
    href={p.link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ y: -6 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
    className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
  >
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-lg font-medium text-white/95">{p.title}</h3>
      <ExternalLink className="h-4 w-4 text-white/60 transition group-hover:text-white" />
    </div>
    <p className="mt-2 text-sm text-white/75">{p.desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
          {t}
        </span>
      ))}
    </div>
    <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
      <Github className="h-4 w-4" /> View on GitHub
    </div>
    {/* Hover shine */}
    <motion.div
      initial={{ x: '-120%' }}
      whileHover={{ x: '120%' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 rotate-12 bg-gradient-to-b from-white/15 to-transparent"
    />
  </motion.a>
);

const Projects = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-zinc-950 to-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
