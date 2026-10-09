import { useState } from 'react';
import { motion } from 'framer-motion';
import { freelancingServices, type Service } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, SectionHeading, Tilt } from './fx';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { scrollTo } = useSmoothScroll();

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactInput = document.getElementById('inquiry-service') as HTMLSelectElement | null;
    if (contactInput) {
      contactInput.value = serviceTitle;
    }
    scrollTo('#contact');
  };

  return (
    <>
      <SectionHeading
        kicker="Freelancing & Client Solutions"
        title="Services & Capabilities"
        aside={
          <p className="max-w-xs text-sm text-mist">
            Available for freelance projects, custom software development, and technical consulting with startups and businesses.
          </p>
        }
      />

      {/* Trust & value banner */}
      <div className="gutter mb-8">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-ink-2 via-ink to-ink-2 p-5 sm:p-6">
          <div aria-hidden className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-crimson/15 blur-2xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-emerald-400">Available For Freelance & Contracts</span>
              </div>
              <p className="mt-1 font-display text-2xl tracking-wide text-bone sm:text-3xl">
                Ready to transform your ideas into robust digital products
              </p>
            </div>
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="flex min-h-11 items-center gap-2 rounded-full bg-crimson px-6 text-sm font-bold tracking-wider text-white shadow-[0_0_30px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2"
              >
                <span>⚡</span> INQUIRE NOW
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="gutter grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {freelancingServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            isSelected={selectedService === service.title}
            onInquire={() => handleInquire(service.title)}
          />
        ))}
      </div>
    </>
  );
}

function ServiceCard({
  service,
  index,
  isSelected,
  onInquire,
}: {
  service: Service;
  index: number;
  isSelected: boolean;
  onInquire: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={6} className="h-full rounded-2xl">
        <article
          className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink-2 p-6 ring-1 transition duration-500 hover:ring-white/30 ${
            isSelected ? 'ring-crimson shadow-[0_0_40px_rgba(229,19,43,0.3)]' : 'ring-white/10'
          }`}
        >
          {/* subtle ambient light */}
          <div
            aria-hidden
            className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-40"
            style={{ background: service.palette.accent }}
          />

          <div className="relative flex items-center justify-between">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-inner"
              style={{ background: `${service.palette.accent}20`, border: `1px solid ${service.palette.accent}40` }}
            >
              {service.icon}
            </span>
            <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mist">
              {service.category}
            </span>
          </div>

          <h3 className="relative mt-5 font-display text-2xl tracking-wide text-bone sm:text-3xl">
            {service.title}
          </h3>

          <p className="relative mt-2 text-sm leading-relaxed text-bone/75">
            {service.description}
          </p>

          <div className="relative mt-5 pt-4 border-t border-white/10">
            <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-smoke">What&apos;s Included</p>
            <ul className="space-y-1.5">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-mist">
                  <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: service.palette.accent }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-auto pt-6">
            <button
              type="button"
              onClick={onInquire}
              data-cursor="play"
              className="group/btn flex w-full min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-4 text-xs font-bold tracking-wider text-bone transition duration-300 hover:border-bone hover:bg-white hover:text-ink"
            >
              <span>INQUIRE THIS SERVICE</span>
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </button>
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
}
