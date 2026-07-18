import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Github, Linkedin } from '../ui/BrandIcons';
import { navLinks, personalInfo } from '../../data/content';
import { useTheme } from '../../context/ThemeContext';
import { useActiveSection } from '../../hooks/useActiveSection';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-text transition-colors hover:text-primary focus-ring rounded-lg dark:text-slate-50"
          onClick={handleNavClick}
        >
          ST<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-ring ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/5 dark:bg-primary/10'
                    : 'text-muted hover:text-text dark:text-slate-400 dark:hover:text-slate-100'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            data-testid="theme-toggle"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-slate-100 hover:text-text focus-ring dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-slate-100 hover:text-text focus-ring dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 sm:flex"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-slate-100 hover:text-text focus-ring dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 sm:flex"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-slate-100 hover:text-text focus-ring lg:hidden dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="glass-nav border-t border-slate-200/60 lg:hidden dark:border-slate-800/60"
        >
          <ul className="section-container flex flex-col gap-1 py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-ring ${
                    activeSection === link.id
                      ? 'bg-primary/5 text-primary dark:bg-primary/10'
                      : 'text-muted hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-muted focus-ring dark:bg-slate-800"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-muted focus-ring dark:bg-slate-800"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
