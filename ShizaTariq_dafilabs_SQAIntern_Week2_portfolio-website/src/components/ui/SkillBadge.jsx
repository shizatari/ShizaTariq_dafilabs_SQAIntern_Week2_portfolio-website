export default function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-text shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent/40">
      {label}
    </span>
  );
}
