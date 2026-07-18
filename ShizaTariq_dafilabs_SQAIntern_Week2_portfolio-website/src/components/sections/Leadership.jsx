import { motion } from 'framer-motion';
import { Users, Award } from 'lucide-react';
import { leadershipRoles, certifications } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';

// Leadership section — showcases leadership roles and certifications as elegant cards.
export default function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Leadership & Activities"
          title="Leadership and involvement"
          description="Active contributions across university societies alongside continuous professional development."
          id="leadership"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipRoles.map((role, index) => (
            <motion.article
              key={`${role.organization}-${role.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-background p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-text dark:text-slate-50">
                {role.organization}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{role.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted dark:text-slate-400">
                {role.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-text dark:text-slate-50">Certifications</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-background shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className="flex h-28 items-center justify-center rounded-t-2xl bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-primary/10 dark:via-slate-900 dark:to-accent/10"
                  aria-hidden="true"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Award className="h-7 w-7" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-sm font-semibold text-text dark:text-slate-100">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-primary">{cert.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-slate-400">
                    {cert.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
