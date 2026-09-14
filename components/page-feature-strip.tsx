import { ArrowRight } from 'lucide-react';

export function PageFeatureStrip({
  eyebrow = 'Choose your next step with clarity.',
  title = 'Find the research or learning service that fits your process.',
  detail = 'Clear scope, practical guidance and transparent disclosures.',
  href = '/contact',
  label = 'Talk to us',
  className = '',
}: {
  eyebrow?: string;
  title?: string;
  detail?: string;
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <section className={`page-feature-strip ${className}`.trim()}>
      <video autoPlay muted loop playsInline aria-hidden="true">
        <source src="/landing-background.mp4" type="video/mp4" />
      </video>
      <div className="page-feature-strip-overlay" />
      <img
        src="/rajesh-cta-phone.png"
        alt="Rajesh Sharma reviewing market updates"
      />
      <div className="page-feature-strip-copy">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <span>{detail}</span>
      </div>
      <a href={href}>
        <ArrowRight size={28} />
        <span>{label}</span>
      </a>
    </section>
  );
}
