import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const MagneticButton = ({ href, children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const dy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });
  const ref = useRef(null);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.25);
    y.set(my * 0.25);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: dx, y: dy }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return content;
};

const Hero = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 15 });
  const py = useSpring(my, { stiffness: 60, damping: 15 });

  const rotateX = useTransform(py, [ -40, 40 ], [ 8, -8 ]);
  const rotateY = useTransform(px, [ -40, 40 ], [ -8, 8 ]);
  const glowX = useTransform(px, (v) => `calc(50% + ${v * 1.2}px)`);
  const glowY = useTransform(py, (v) => `calc(40% + ${v * 1.2}px)`);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const rx = (e.clientX / innerWidth) * 2 - 1; // -1..1
    const ry = (e.clientY / innerHeight) * 2 - 1;
    mx.set(rx * 40);
    my.set(ry * 40);
  };

  const words = [
    'Sourabh',
    'Pawar',
  ];

  return (
    <section onMouseMove={handleMouseMove} className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dynamic glow that follows the cursor (non-blocking) */}
      <motion.div
        className="pointer-events-none absolute h-[60vmin] w-[60vmin] rounded-full blur-3xl"
        style={{
          left: glowX,
          top: glowY,
          background:
            'radial-gradient(closest-side, rgba(168,85,247,0.25), rgba(59,130,246,0.15), rgba(0,0,0,0))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center will-change-transform"
          style={{ rotateX, rotateY }}
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-violet-300" />
            <span className="text-sm text-white/80">AI/ML Engineer • Backend Developer • Multi-Agent Systems</span>
          </div>

          {/* Animated name reveal */}
          <h1 className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-3 bg-gradient-to-br from-white via-violet-200 to-orange-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            {words.map((w, wi) => (
              <motion.span
                key={w}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: wi * 0.15 + 0.2, duration: 0.6, ease: 'easeOut' }}
                className="inline-block"
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
          >
            I build intelligent systems that automate research, reasoning, and decision-making — turning ideas into working software.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href="https://github.com/sourabhsp23"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Github className="h-4 w-4" /> GitHub
            </MagneticButton>
            <MagneticButton
              href="https://www.linkedin.com/in/saurabh-pawar-453458270"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </MagneticButton>
            <MagneticButton
              href="mailto:sourabhsp23@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Email
            </MagneticButton>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70"
          >
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Karnataka, India
            </div>
            <div className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 79750 49386
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
