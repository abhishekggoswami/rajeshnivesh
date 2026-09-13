import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CandlestickChart,
  Compass,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { ServicesFaq } from '@/components/services-faq';
import { SiteHeader } from '@/components/site-header';

const services = [
  ['01', BarChart3, 'Market Analysis & Research', 'Daily technical and fundamental market research, organised to support informed decisions.', '/service-market-analysis.mp4', '/market-analysis-research'],
  ['02', CandlestickChart, 'Intraday & BTST Calls', 'Structured intraday and buy-today-sell-tomorrow research calls with clear trade parameters.', '/service-intraday-btst.mp4', '/#disclaimer'],
  ['03', Target, 'Options Trading Advisory', 'Options research for index and stock participants, with clarity on strike selection and risk.', '/service-options-advisory.mp4', '/#disclaimer'],
  ['04', TrendingUp, 'Index Trading', 'Research-led Nifty and Bank Nifty ideas designed around defined risk and market context.', '/service-index-trading.mp4', '/#disclaimer'],
  ['05', Compass, 'Delivery & Swing Trading', 'Curated delivery and swing trade research for investors seeking quality opportunities.', '/service-delivery-swing.mp4', '/#disclaimer'],
  ['06', Landmark, 'Commodity Advisory (MCX)', 'Macro-aware commodity research across Gold, Silver, Crude Oil and Natural Gas.', '/service-commodity-advisory.mp4', '/#disclaimer'],
  ['07', ShieldCheck, 'Risk Management Training', 'Build a more resilient approach with practical capital-protection and position-sizing principles.', '/service-risk-management.mp4', '/#disclaimer'],
  ['08', GraduationCap, 'Learning Programmes & Courses', 'Structured learning tracks that take market participants from core concepts to applied analysis.', '/service-learning-programmes.mp4', '/#learning'],
  ['09', BriefcaseBusiness, 'Market Mentorship & Workshops', 'Live, practical sessions that help you build research habits, sharpen decision-making and learn from real market scenarios.', '/service-portfolio-management.mp4', '/#disclaimer'],
] as const;

export default function ServicesPage() {
  return (
    <main className="services-list-page">
      <section className="services-page-landing" aria-labelledby="services-title">
        <video autoPlay muted loop playsInline aria-hidden="true">
          <source src="/hero-market-video.mp4" type="video/mp4" />
        </video>
        <div className="services-page-landing-overlay" />
        <SiteHeader active="Services" />
        <div className="services-page-landing-copy">
          <p><span>*</span> Research-led services</p>
          <h1 id="services-title">
            Built for more
            <br />
            <strong>confident market decisions.</strong>
          </h1>
          <p>
            Research, trading and learning services designed around clarity,
            preparation and disciplined participation.
          </p>
          <a href="#all-services">Explore all services <ArrowRight size={17} /></a>
        </div>
        <img src="/rajesh-standing-cutout.png" alt="Rajesh Sharma" />
      </section>

      <section id="all-services" className="services-reference services-list-section is-visible" aria-label="All services">
        <div className="solutions-shell">
          <div className="solutions-heading">
            <div>
              <p className="orange-kicker"><b>*</b> Our solutions</p>
              <h2>
                <span>Providing the best</span> <strong>solutions</strong>
                <br />
                for your market journey.
              </h2>
            </div>
          </div>
          <div className="solution-progress" aria-hidden="true"><i /><span /></div>
          <div className="solutions-cards">
            {services.map(([number, Icon, title, description, video, href], index) => (
              <article className="solution-card" key={title} style={{ '--delay': `${index * 110}ms` } as React.CSSProperties}>
                <div className="solution-image">
                  <video autoPlay muted loop playsInline aria-hidden="true">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                <span className="solution-symbol" aria-hidden="true"><Icon size={29} /></span>
                <div className="solution-content">
                  <span className="solution-number">Service {number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={href}>
                    <i />
                    <span className="learn-more-label">Learn more <ArrowRight size={15} /></span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="services-page-cta" aria-labelledby="services-cta-title">
        <video autoPlay muted loop playsInline aria-hidden="true">
          <source src="/hero-market-video.mp4" type="video/mp4" />
        </video>
        <div className="services-page-cta-overlay" />
        <img src="/rajesh-cta-phone.png" alt="Rajesh Sharma reviewing market updates" />
        <div className="services-page-cta-copy">
          <p>Choose your next step with clarity.</p>
          <h2 id="services-cta-title">
            Find the research or learning service that fits your process.
          </h2>
          <span>✳ Clear scope, practical guidance and transparent disclosures.</span>
        </div>
        <a className="services-page-cta-action" href="mailto:sharmaarajessh@gmail.com">
          <ArrowRight size={28} />
          <span>Talk to us</span>
        </a>
      </section>
      <ServicesFaq />
      <SiteFooter />
    </main>
  );
}
