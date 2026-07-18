import { projects } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 bg-white dark:bg-slate-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work & engineering projects"
          description="A collection of projects spanning AI, full-stack development, networking, embedded systems, and software engineering."
          id="projects"
        />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
