import { useState, useRef, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile, freelancingServices } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2600);
  };

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — From ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Parmeshwar,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSelected Service: ${formData.service}\n\nProject Details:\n${formData.message}\n`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" ref={ref} className="relative min-h-[100svh] overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>

      <motion.h2
        className="relative font-display leading-[0.88] text-bone"
        style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        LET&apos;S BUILD SOMETHING GREAT
      </motion.h2>

      <motion.p
        className="relative mx-auto mt-4 max-w-2xl text-base text-bone/80 sm:text-lg"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        I&apos;m available to discuss software development opportunities, freelance projects, and collaborations.
      </motion.p>

      {/* Direct Contact Cards */}
      <div className="relative mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {/* Email Card */}
        <div className="rounded-2xl border border-white/10 bg-ink-2/90 p-5 text-left backdrop-blur ring-1 ring-white/5 transition hover:border-crimson-2/50">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-mist">Email</span>
            <span className="text-lg text-crimson-2">✉</span>
          </div>
          <p className="mt-2 font-mono text-xs font-medium text-bone truncate">{profile.email}</p>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2 text-xs font-semibold text-bone transition hover:bg-white hover:text-ink"
          >
            {copied ? '✓ Copied to Clipboard' : '📋 Copy Email'}
          </button>
        </div>

        {/* GitHub Card */}
        <div className="rounded-2xl border border-white/10 bg-ink-2/90 p-5 text-left backdrop-blur ring-1 ring-white/5 transition hover:border-white/30">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-mist">GitHub</span>
            <span className="text-lg text-bone">⚡</span>
          </div>
          <p className="mt-2 font-mono text-xs font-medium text-bone truncate">github.com/parmeshwar-durgist</p>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2 text-xs font-semibold text-bone transition hover:bg-white hover:text-ink"
          >
            Open Profile ↗
          </a>
        </div>

        {/* Portfolio / Website Card */}
        <div className="rounded-2xl border border-white/10 bg-ink-2/90 p-5 text-left backdrop-blur ring-1 ring-white/5 transition hover:border-emerald-500/50">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-mist">Live Portfolio</span>
            <span className="text-lg text-emerald-400">🌐</span>
          </div>
          <p className="mt-2 font-mono text-xs font-medium text-bone truncate">parmeshwar-durgist.github.io</p>
          <a
            href={profile.links.portfolio}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2 text-xs font-semibold text-bone transition hover:bg-white hover:text-ink"
          >
            Open Developer Site ↗
          </a>
        </div>
      </div>

      {/* Interactive Project Inquiry Form */}
      <motion.div
        className="relative mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-b from-ink-2/95 to-ink/95 p-6 text-left shadow-2xl backdrop-blur sm:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
      >
        <div className="mb-6 border-b border-white/10 pb-4">
          <h3 className="font-display text-2xl tracking-wide text-bone sm:text-3xl">Start a Project or Send Inquiry</h3>
          <p className="mt-1 text-xs text-mist">Fill out the details below to initiate an inquiry or job conversation.</p>
        </div>

        {formSent ? (
          <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center">
            <p className="text-lg font-bold text-emerald-400">Inquiry Prepared!</p>
            <p className="mt-1 text-xs text-bone/80">Your email client has opened with this inquiry draft. Feel free to send or email directly to {profile.email}.</p>
            <button
              type="button"
              onClick={() => setFormSent(false)}
              className="mt-4 rounded-lg bg-white/10 px-4 py-1.5 text-xs font-semibold text-bone hover:bg-white/20"
            >
              Reset Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleInquirySubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="inquiry-name" className="block text-[11px] font-bold uppercase tracking-wider text-smoke">
                  Your Name
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder:text-smoke/60 focus:border-crimson-2 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="block text-[11px] font-bold uppercase tracking-wider text-smoke">
                  Your Email
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder:text-smoke/60 focus:border-crimson-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-service" className="block text-[11px] font-bold uppercase tracking-wider text-smoke">
                Interested In Service / Opportunity
              </label>
              <select
                id="inquiry-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-white/15 bg-ink-2 px-3.5 py-2.5 text-sm text-bone focus:border-crimson-2 focus:outline-none"
              >
                {freelancingServices.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.category})
                  </option>
                ))}
                <option value="Full-Time Software Engineer Role">Full-Time Software Engineer Role</option>
                <option value="General Technical Consultation">General Technical Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-[11px] font-bold uppercase tracking-wider text-smoke">
                Project Overview / Message
              </label>
              <textarea
                id="inquiry-message"
                rows={3}
                required
                placeholder="Tell me about your project, timeline, or requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder:text-smoke/60 focus:border-crimson-2 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full min-h-12 items-center justify-center gap-2 rounded-xl bg-crimson px-6 font-sans text-sm font-bold tracking-wider text-white shadow-[0_0_30px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2"
              >
                <span>✉</span> SEND PROJECT INQUIRY
              </button>
            </div>
          </form>
        )}
      </motion.div>

      {/* Nav back & replay controls */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
          ↺ BACK TO TOP
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone">
          ▶ REPLAY OPENING
        </button>
      </div>

      <footer className="relative mt-20 border-t border-white/10 px-4 pt-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-xs font-medium text-bone/90">
          {profile.fullName} · {profile.role}
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. Built with modern full-stack web architecture.
        </p>
      </footer>
    </section>
  );
}
