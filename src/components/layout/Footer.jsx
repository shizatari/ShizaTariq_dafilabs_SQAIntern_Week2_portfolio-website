import { Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../ui/BrandIcons';
import { personalInfo } from '../../data/content';

const socialLinks = [
  { href: personalInfo.github, label: 'GitHub', icon: Github },
  { href: personalInfo.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: personalInfo.instagram, label: 'Instagram', icon: Instagram },
  { href: `mailto:${personalInfo.email}`, label: 'Email', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-text dark:text-slate-200">
              © 2026 Shiza Tariq
            </p>
            <p className="mt-1 text-sm text-muted dark:text-slate-500">
              Designed &amp; Developed by Shiza Tariq
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-muted transition-all hover:border-primary/30 hover:text-primary focus-ring dark:border-slate-700 dark:hover:border-accent/40 dark:hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
