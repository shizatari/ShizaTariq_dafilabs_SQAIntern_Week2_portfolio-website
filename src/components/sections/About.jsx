import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Target, Zap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    text: 'BS Computer Engineering at the University of Lahore with a GPA of 3.97/4.0.',
  },
  {
    icon: Sparkles,
    title: 'Technical Interests',
    text: 'Software Engineering, AI, Machine Learning, Computer Vision, Networking, Embedded Systems, Cloud Computing, Databases, and Full-Stack Development.',
  },
  {
    icon: Target,
    title: 'Engineering Mindset',
    text: 'Detail-oriented problem solver with a passion for tackling challenging engineering problems.',
  },
  {
    icon: Zap,
    title: 'Growth & Opportunity',
    text: 'Fast learner actively seeking internships and software engineering opportunities.',
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 bg-white dark:bg-slate-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Building the future through engineering"
          description="A dedicated Computer Engineering student combining academic rigor with hands-on project experience across AI, software development, and embedded systems."
          id="about"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-base leading-relaxed text-muted dark:text-slate-400"
          >
            <p>
              I am a Computer Engineering student at the{' '}
              <strong className="font-semibold text-text dark:text-slate-200">University of Lahore</strong>{' '}
              with a strong academic record of{' '}
              <strong className="font-semibold text-primary">3.97/4.0 GPA</strong>. My journey in
              engineering is driven by curiosity about how intelligent systems work and how software
              can solve meaningful real-world problems.
            </p>
            <p>
              From developing AI-powered medical imaging solutions to designing secure network
              infrastructures and embedded sensor systems, I thrive at the intersection of theory
              and practice. I am particularly passionate about machine learning, computer vision,
              cloud technologies, and building scalable full-stack applications.
            </p>
            <p>
              Beyond technical skills, I bring leadership experience from multiple university
              societies and a commitment to continuous learning. I am actively seeking internships
              and software engineering roles where I can contribute, grow, and make an impact.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200/80 bg-background p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-text dark:text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
