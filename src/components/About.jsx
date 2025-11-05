import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-center text-white/80"
        >
          I am an AI/ML Engineer and Backend Developer focused on building scalable backend systems, ML-powered applications, and multi-agent automation workflows. I take projects end-to-end — from research to architecture to deployment — with an emphasis on reliability and real-world usefulness.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-violet-300" />
              <h3 className="text-lg font-medium">Education</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li>
                B.E. in Artificial Intelligence and Machine Learning — P D A College of Engineering (Graduating 2026), GPA: 8.15/10
              </li>
              <li>
                12th: Naveen PU College, Bidar — 89.5%
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-4 flex items-center gap-3">
              <Award className="h-5 w-5 text-orange-300" />
              <h3 className="text-lg font-medium">Achievements</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li>VTU CodeQuest Finalist (Java Domain)</li>
              <li>Built gramMITRA in a 24-hour hackathon</li>
              <li>NVIDIA – Transformer-Based NLP (Certification)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
