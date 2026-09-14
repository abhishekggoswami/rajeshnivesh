import { ArrowRight, Check, Mail, ShieldCheck } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { ServicesFaq } from '@/components/services-faq';
import { SiteHeader } from '@/components/site-header';
import { getServiceDetail, serviceDetails } from '@/lib/service-details';

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <video className="service-detail-hero-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/landing-background.mp4" type="video/mp4" />
        </video>
        <div className="service-detail-hero-overlay" />
        <SiteHeader active="Services" />
        <div className="service-detail-hero-copy">
          <p className="service-detail-kicker"><span /> {service.eyebrow}</p>
          <h1>{service.heroTitle}<br /><em>{service.heroEmphasis}</em></h1>
          <p>{service.description}</p>
          <a className="service-detail-primary" href="#overview">
            Explore the service <ArrowRight size={17} />
          </a>
        </div>
        <div className="service-detail-status" aria-label={`${service.title} details`}>
          <Icon size={22} />
          <div><span>Research-led</span><b>{service.focus}</b></div>
        </div>
        <a className="service-detail-scroll" href="#overview">
          Scroll to explore <ArrowRight size={14} />
        </a>
      </section>

      <section id="overview" className="service-detail-overview">
        <div>
          <p className="service-detail-kicker dark"><span /> {service.title}</p>
          <h2>{service.overviewTitle}<br /> <em>{service.overviewEmphasis}</em></h2>
        </div>
        <div className="service-detail-overview-copy">
          {service.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="service-detail-disclosure">
            <ShieldCheck size={18} />
            <span>SEBI Registered Research Analyst · INH000026628</span>
          </div>
        </div>
      </section>

      <section className="service-detail-workspace">
        <aside className="service-detail-rail">
          <div className="service-detail-rail-details">
            <p className="service-detail-kicker"><span /> Service details</p>
            <dl>
              <div><dt>Service</dt><dd>{service.title}</dd></div>
              <div><dt>Research focus</dt><dd>{service.focus}</dd></div>
              <div><dt>Approach</dt><dd>{service.approach}</dd></div>
              <div><dt>Use case</dt><dd>{service.useCase}</dd></div>
              <div><dt>Registration</dt><dd>SEBI RA · INH000026628</dd></div>
            </dl>
          </div>
          <div className="service-detail-rail-cta">
            <p>Need clarity on this service?</p>
            <span>We can help you understand its scope and the related disclosures.</span>
            <a href="mailto:sharmaarajessh@gmail.com"><Mail size={17} /> Write to us</a>
          </div>
        </aside>

        <div className="service-detail-story">
          <figure className="service-detail-feature-image">
            <img src="/services-office-background.jpg" alt="Modern office building representing a structured market process" />
          </figure>
          <article className="service-detail-story-copy">
            <p className="service-detail-kicker dark"><span /> A clear approach</p>
            <h2>Preparation before<br /><em>participation.</em></h2>
            <p>{service.description}</p>
            <p>Use the service as one considered input to your process, alongside your own objectives, financial situation and suitability assessment.</p>
          </article>
          <article className="service-detail-benefits">
            <p className="service-detail-kicker dark"><span /> What it supports</p>
            <h2>More structure,<br /><em>better questions.</em></h2>
            <p>Use the material to support a more deliberate market routine.</p>
            <ul>
              {service.benefits.map((benefit) => <li key={benefit}><Check size={16} /> {benefit}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="service-detail-cta">
        <p className="service-detail-kicker"><span /> Start with clarity</p>
        <h2>Build a more considered<br /><em>market process.</em></h2>
        <a href="/services">Explore all research services <ArrowRight size={18} /></a>
      </section>

      <ServicesFaq variant="research" />
      <SiteFooter />
    </main>
  );
}
