import { ArrowRight, CircleGauge, ShieldCheck, Target } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { PageFeatureStrip } from '@/components/page-feature-strip';
import { ServicesFaq } from '@/components/services-faq';
import { SiteFooter } from '@/components/site-footer';

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page-hero">
        <video
          className="inner-landing-background"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/landing-background.mp4" type="video/mp4" />
        </video>
        <SiteHeader active="About" />
        <div className="about-page-hero-copy">
          <p>
            <span /> About Rajesh Nivesh
          </p>
          <h1>
            Research with
            <br />
            <em>clarity at its centre.</em>
          </h1>
          <p>
            Rajesh Nivesh is a dedicated platform for market participants who
            value preparation, process and informed decision-making over
            speculation.
          </p>
          <a className="inner-hero-action" href="#about-story">
            Explore our approach <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section id="about-story" className="about-page-story">
        <figure>
          <img src="/rajesh-seated-profile.png" alt="Rajesh Sharma" />
        </figure>
        <div>
          <p className="detail-kicker">
            <span /> The philosophy
          </p>
          <h2>
            Elevating your market process with <em>clarity.</em>
          </h2>
          <p>
            Led by SEBI Registered Research Analyst Rajesh Sharma, Rajesh Nivesh
            brings together high-quality market insight and practical trading
            education. The work starts with a simple belief: decisions improve
            when they are built on context, thoughtful analysis and a clear risk
            framework.
          </p>
          <p>
            We do not treat the market as a place for certainty. Our role is to
            make research easier to understand and learning easier to apply, so
            every participant can develop a process that is genuinely their own.
          </p>
          <div className="about-page-profile">
            <b>Rajesh Sharma</b>
            <span>SEBI Registered Research Analyst · INH000026628</span>
          </div>
        </div>
      </section>
      <PageFeatureStrip
        className="about-feature-strip"
        title="Find the research or learning support that fits your process."
      />
      <section className="about-principles">
        <div>
          <p className="detail-kicker">
            <span /> What guides us
          </p>
          <h2>
            Better habits,
            <br />
            not market <em>hype.</em>
          </h2>
        </div>
        <div className="about-principle-grid">
          <article>
            <CircleGauge size={25} />
            <h3>Context first</h3>
            <p>
              Research begins with market structure, participation and relevant
              information—not prediction alone.
            </p>
          </article>
          <article>
            <ShieldCheck size={25} />
            <h3>Risk-aware thinking</h3>
            <p>
              Capital protection, suitability and position sizing belong in
              every serious market process.
            </p>
          </article>
          <article>
            <Target size={25} />
            <h3>Practical learning</h3>
            <p>
              Courses and workshops focus on repeatable skills, useful
              checklists and real decision scenarios.
            </p>
          </article>
        </div>
      </section>
      <section
        className="achievement-strip about-achievement-strip"
        aria-label="Rajesh Nivesh experience and approach"
      >
        <div className="achievement-strip-copy">
          Built for <b>clearer market habits</b>, research-led learning and
          more disciplined decisions.
        </div>
        <div className="achievement-stats">
          <div>
            <b>
              16<sup>+</sup>
            </b>
            <span>Years of market learning</span>
          </div>
          <div>
            <b>
              1M<sup>+</sup>
            </b>
            <span>Research views</span>
          </div>
          <div>
            <b>09</b>
            <span>Research &amp; learning services</span>
          </div>
        </div>
      </section>
      <ServicesFaq variant="about" />
      <SiteFooter />
    </main>
  );
}
