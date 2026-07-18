import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../ui/BrandIcons';
import { personalInfo } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from '../ui/ContactForm';

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/shizatari',
    href: personalInfo.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shiza-t',
    href: personalInfo.linkedin,
    external: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@iamshizatariq',
    href: personalInfo.instagram,
    external: true,
  },
];

// Contact section — pairs direct contact channels with an accessible, validated form.
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Interested in internships, collaborations, or software engineering opportunities? Reach out and I'll respond as soon as I can."
          id="contact"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-text dark:text-slate-100">
              Get in touch
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted dark:text-slate-400">
              Feel free to reach out through any of the channels below. I&apos;m always open to
              discussing new projects, ideas, and opportunities.
            </p>

            <ul className="mt-8 space-y-3" role="list">
              {contactChannels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-background p-4 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)] focus-ring dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105 dark:group-hover:text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted dark:text-slate-500">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-text dark:text-slate-200">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200/80 bg-background p-6 shadow-[var(--shadow-card)] sm:p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
