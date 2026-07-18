import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import Button from './Button';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] dark:border-slate-800 dark:bg-slate-900"
    >
      <div
        className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-primary/5 dark:from-slate-800 dark:via-slate-900 dark:to-primary/10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-slate-900/80" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-text dark:text-slate-50">{project.title}</h3>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted dark:text-slate-400">
          <p>
            <span className="font-medium text-text dark:text-slate-200">Problem: </span>
            {project.problem}
          </p>
          <p>
            <span className="font-medium text-text dark:text-slate-200">Solution: </span>
            {project.solution}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-1.5 text-sm text-muted dark:text-slate-400">
          {project.achievements.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <Button
            variant="secondary"
            size="sm"
            href="https://github.com/shizatari"
            external
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </Button>
          <Button variant="ghost" size="sm" href={`#projects`} aria-label={`Read more about ${project.title}`}>
            Read More
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
