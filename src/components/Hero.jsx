import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(130,87,229,0.25),rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_10%,rgba(255,140,66,0.18),rgba(0,0,0,0)_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-violet-300" />
            <span className="text-sm text-white/80">AI/ML Engineer • Backend Developer • Multi-Agent Systems</span>
          </div>
          <h1 className="bg-gradient-to-br from-white via-violet-200 to-orange-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Sourabh Pawar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            I build intelligent systems that automate research, reasoning, and decision-making — turning ideas into working software.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/sourabhsp23"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saurabh-pawar-453458270"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="mailto:sourabhsp23@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Karnataka, India
            </div>
            <div className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 79750 49386
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
