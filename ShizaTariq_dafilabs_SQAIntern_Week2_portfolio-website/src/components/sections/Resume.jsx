import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import { personalInfo } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

// Resume section — modern card with a PDF preview placeholder and view/download actions.
export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-24 bg-background dark:bg-slate-900/50"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Resume"
          title="My resume"
          description="Get a complete overview of my education, skills, projects, and experience."
          id="resume"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 md:grid-cols-2 dark:border-slate-800 dark:bg-slate-900"
        >
          {/* PDF preview placeholder */}
          <div
            className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 dark:border-slate-800 dark:from-slate-800 dark:to-slate-900"
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-3 text-muted dark:text-slate-400">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium">Resume.pdf</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-text dark:text-slate-50">Shiza Tariq</h3>
            <p className="mt-1 text-base font-medium text-primary">
              Computer Engineering Student
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted dark:text-slate-400">
              Download or preview my full resume to explore my academic achievements, technical
              skills, engineering projects, leadership roles, and certifications in detail.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={personalInfo.resumePath}
                external
                size="lg"
                data-testid="resume-view"
                aria-label="View resume in a new tab"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                View Resume
              </Button>
              <Button
                href={personalInfo.resumePath}
                download
                variant="secondary"
                size="lg"
                data-testid="resume-download"
                aria-label="Download resume PDF"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
