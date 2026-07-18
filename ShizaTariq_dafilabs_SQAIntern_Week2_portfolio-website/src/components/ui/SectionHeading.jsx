import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      {eyebrow && (
        <p
          id={id ? `${id}-label` : undefined}
          className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary"
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl dark:text-slate-50">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted dark:text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
