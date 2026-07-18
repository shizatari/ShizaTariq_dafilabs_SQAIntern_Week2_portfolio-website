import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import Button from './Button';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="status"
            aria-live="polite"
            className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="text-sm font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-text dark:text-slate-200">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-text transition-colors focus-ring dark:bg-slate-900 dark:text-slate-100 ${
              errors.name
                ? 'border-red-400 dark:border-red-500'
                : 'border-slate-200 dark:border-slate-700'
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-text dark:text-slate-200">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-text transition-colors focus-ring dark:bg-slate-900 dark:text-slate-100 ${
              errors.email
                ? 'border-red-400 dark:border-red-500'
                : 'border-slate-200 dark:border-slate-700'
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-text dark:text-slate-200">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-text transition-colors focus-ring dark:bg-slate-900 dark:text-slate-100 ${
              errors.message
                ? 'border-red-400 dark:border-red-500'
                : 'border-slate-200 dark:border-slate-700'
            }`}
            placeholder="Tell me about your project or opportunity..."
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
