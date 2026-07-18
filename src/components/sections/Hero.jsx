import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderOpen, User } from 'lucide-react';
import { personalInfo } from '../../data/content';
import Button from '../ui/Button';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl dark:bg-accent/10" />
      </div>

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Hi, I&apos;m
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl dark:text-slate-50"
          >
            {personalInfo.name}
          </h1>

          <div className="mt-4 space-y-1">
            <p className="text-xl font-medium text-text dark:text-slate-200">{personalInfo.title}</p>
            {personalInfo.subtitles.map((line) => (
              <p key={line} className="text-lg text-muted dark:text-slate-400">
                {line}
              </p>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg dark:text-slate-400">
            Computer Engineering student passionate about building intelligent software systems,
            AI-powered applications, scalable web platforms, and innovative technology solutions. I
            enjoy solving real-world problems through software engineering, machine learning, cloud
            technologies, and embedded systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects" size="lg">
              <FolderOpen className="h-4 w-4" aria-hidden="true" />
              View Projects
            </Button>
            <Button
              href={personalInfo.resumePath}
              download
              variant="secondary"
              size="lg"
              data-testid="hero-download-resume"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-slate-200/60 sm:h-80 sm:w-80 dark:border-slate-800 dark:shadow-slate-900/60">
              {!imageError ? (
                <img
                  src="/profile.png"
                  alt="Professional portrait of Shiza Tariq, a Computer Engineering student, wearing a textured gray jacket against a natural outdoor background."
                  loading="eager"
                  className="h-full w-full object-cover object-top"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-muted dark:text-slate-400">
                    Shiza Tariq
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted transition-colors hover:text-primary focus-ring rounded-lg dark:text-slate-500 dark:hover:text-accent"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
