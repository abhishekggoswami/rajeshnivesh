import {
  ArrowRight,
  BarChart3,
  Check,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { ServicesFaq } from '@/components/services-faq';
import { SiteHeader } from '@/components/site-header';

export default function MarketAnalysisResearchPage() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <video
          className="service-detail-hero-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/landing-background.mp4" type="video/mp4" />
        </video>
        <div className="service-detail-hero-overlay" />
        <SiteHeader active="Services" />
        <div className="service-detail-hero-copy">
          <p className="service-detail-kicker">
            <span /> Research service 01
          </p>
          <h1>
            Market analysis,
            <br />
            <em>with context.</em>
          </h1>
          <p>
            Daily market research designed to help you approach changing
            conditions with more structure, clarity and discipline.
          </p>
          <p className="service-detail-availability"><span /> Launching soon</p>
          <a className="service-detail-primary" href="#overview">
            Explore the service <ArrowRight size={17} />
          </a>
        </div>
        <div
          className="service-detail-status"
          aria-label="Research service details"
        >
          <BarChart3 size={22} />
          <div>
            <span>Research-led</span>
            <b>Daily market perspective</b>
          </div>
        </div>
        <a className="service-detail-scroll" href="#overview">
          Scroll to explore <ArrowRight size={14} />
        </a>
      </section>

      <section id="overview" className="service-detail-overview">
        <div>
          <p className="service-detail-kicker dark">
            <span /> Market Analysis &amp; Research
          </p>
          <h2>
            A more prepared view
            <br />
            of the <em>market.</em>
          </h2>
        </div>
        <div className="service-detail-overview-copy">
          <p>
            Markets move quickly. This service brings the day&apos;s context
            into focus through structured analysis of price action, market
            breadth, sectors and key levels.
          </p>
          <p>
            Every research view is intended to support informed
            decision-making—not to promise outcomes or replace your own
            judgement.
          </p>
          <div className="service-detail-disclosure">
            <ShieldCheck size={18} />
            <span>SEBI Registered Research Analyst · INH000026628</span>
          </div>
        </div>
      </section>

      <section id="research" className="service-detail-workspace">
        <aside className="service-detail-rail">
          <div className="service-detail-rail-details">
            <p className="service-detail-kicker">
              <span /> Service details
            </p>
            <dl>
              <div>
                <dt>Service</dt>
                <dd>Market Analysis &amp; Research</dd>
              </div>
              <div>
                <dt>Research focus</dt>
                <dd>Price action, breadth and sector context</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>Technical and fundamental observations</dd>
              </div>
              <div>
                <dt>Use case</dt>
                <dd>Structured preparation and market review</dd>
              </div>
              <div>
                <dt>Registration</dt>
                <dd>SEBI RA · INH000026628</dd>
              </div>
            </dl>
          </div>
          <div className="service-detail-rail-cta">
            <p>Need clarity on the research service?</p>
            <span>
              We can help you understand its scope and the related disclosures.
            </span>
            <a href="mailto:sharmaarajessh@gmail.com">
              <Mail size={17} /> Write to us
            </a>
          </div>
        </aside>

        <div className="service-detail-story">
          <figure className="service-detail-feature-image">
            <video autoPlay muted loop playsInline aria-label="Market analysis service preview">
              <source src="/service-market-analysis.mp4" type="video/mp4" />
            </video>
          </figure>
          <article className="service-detail-story-copy">
            <p className="service-detail-kicker dark">
              <span /> Research approach
            </p>
            <h2>
              Context before
              <br />
              <em>conviction.</em>
            </h2>
            <p>
              Useful market research starts by separating what the market is
              doing from what we hope it will do. Each view is built around
              observable information—price structure, participation, sector
              behaviour and relevant developments.
            </p>
            <p>
              The objective is to make the research easier to assess and use
              responsibly. You remain responsible for considering your own
              objectives, financial situation, risk tolerance and suitability
              before acting.
            </p>
          </article>
          <article className="service-detail-benefits">
            <p className="service-detail-kicker dark">
              <span /> Client benefit
            </p>
            <h2>
              A clearer research
              <br />
              workflow.
            </h2>
            <p>
              Use the material as a structured input to your own decision-making
              process.
            </p>
            <ul>
              <li>
                <Check size={16} /> Begin with the day&apos;s market context and
                relevant watchpoints.
              </li>
              <li>
                <Check size={16} /> Review key levels alongside market breadth
                and sector participation.
              </li>
              <li>
                <Check size={16} /> Distinguish research observations from
                assured-return claims.
              </li>
              <li>
                <Check size={16} /> Apply your own risk limits and suitability
                assessment before acting.
              </li>
            </ul>
          </article>
          <div className="service-detail-image-cards">
            <article>
              <img
                src="https://images.unsplash.com/photo-1640459958548-56c1c6717a40?auto=format&fit=crop&w=1200&q=85"
                alt="Close-up of a market chart on a computer screen"
              />
              <div>
                <span>01</span>
                <h3>Market structure</h3>
                <p>
                  Review price behaviour and participation with a disciplined
                  lens.
                </p>
              </div>
            </article>
            <article>
              <img
                src="https://www.stocktrak.com/wp-content/uploads/2016/12/Portfolio-Management-%E2%80%93-Fundamental-Analysis-Project.png"
                alt="Financial documents, calculator and notebook arranged on a desk"
              />
              <div>
                <span>02</span>
                <h3>Sector context</h3>
                <p>
                  Place individual ideas within broader market and sector
                  conditions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <p className="service-detail-kicker">
          <span /> Start with clarity
        </p>
        <h2>
          Make space for a<br />
          <em>better market process.</em>
        </h2>
        <a href="/">
          Explore all research services <ArrowRight size={18} />
        </a>
      </section>

      <ServicesFaq variant="research" />
      <SiteFooter />
    </main>
  );
}
