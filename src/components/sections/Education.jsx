import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, Award, BookOpen } from 'lucide-react';
import { education } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';

// Education section — renders a professional timeline-style card built from CV data.
export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-24 bg-background dark:bg-slate-900/50"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="A strong foundation in computer engineering combining theory, hardware, and modern software practices."
          id="education"
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[var(--shadow-card)] dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text dark:text-slate-50">
                  {education.degree}
                </h3>
                <p className="mt-1 text-base font-medium text-primary">{education.institution}</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {education.period}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-background px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
              <Award className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted dark:text-slate-500">
                  GPA
                </p>
                <p className="text-lg font-bold text-text dark:text-slate-100">{education.gpa}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 px-6 py-6 sm:px-8 dark:border-slate-800">
            <h4 className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-text dark:text-slate-200">
              <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
              Relevant Coursework
            </h4>
            <ul className="flex flex-wrap gap-2" role="list">
              {education.coursework.map((course) => (
                <li
                  key={course}
                  className="rounded-lg border border-slate-200 bg-background px-3 py-1.5 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
