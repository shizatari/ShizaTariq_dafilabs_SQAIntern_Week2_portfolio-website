import { motion } from 'framer-motion';
import { skillCategories } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 bg-background dark:bg-slate-900/50">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technical expertise"
          description="A versatile toolkit spanning programming, AI/ML, web development, and engineering tools."
          id="skills"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[var(--shadow-card)] dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mb-4 text-lg font-semibold text-text dark:text-slate-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
