import { motion } from 'framer-motion';
import { education, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const facts = [
    { k: 'Experience', v: profile.experienceYears, s: 'Full-Stack & Android Engineering' },
    { k: 'Academics', v: `${education[1].degree}`, s: `${education[1].school} · ${education[1].score}` },
    { k: 'Advanced Degree', v: `${education[0].degree}`, s: `${education[0].school} (${education[0].period})` },
    { k: 'Location', v: profile.location, s: 'Available Worldwide for Freelance & Full-Time' },
  ];

  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />
      <div className="gutter grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:sticky lg:top-28 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />

              {/* Graphic monogram badge backdrop */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="font-display text-[9rem] leading-none text-white/[0.08] select-none">PD</span>
              </div>

              <img
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">ENGINEER & CREATOR</p>
                  <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                  <p className="mt-1 text-xs text-mist">{profile.role}</p>
                </div>
                <span className="rounded border border-white/30 px-2 py-0.5 text-[10px] font-bold text-bone">S01–S04</span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="space-y-4 text-bone/85"
          >
            <p className="font-serif text-[clamp(1.4rem,2.5vw,2.1rem)] italic leading-[1.3] text-bone">
              “{profile.aboutFull[0]}”
            </p>

            <p className="text-[15px] leading-relaxed text-bone/80 sm:text-base">
              {profile.aboutFull[1]}
            </p>

            <p className="text-[15px] leading-relaxed text-bone/80 sm:text-base">
              {profile.aboutFull[2]}
            </p>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-mist">
              <span className="font-semibold text-bone">Freelance Services: </span>
              {profile.aboutFull[3]}
            </div>

            <p className="text-[15px] leading-relaxed text-bone/80 sm:text-base">
              {profile.aboutFull[4]}
            </p>
          </motion.div>

          <motion.dl
            className="mt-8 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                <dd className="mt-1.5 text-base font-semibold text-bone">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Focus & Interests</p>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span key={i} className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-bone">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
