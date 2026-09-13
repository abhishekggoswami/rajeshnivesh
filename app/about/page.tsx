import { CircleGauge, ShieldCheck, Target } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { PageCta } from '@/components/page-cta';
import { SiteFooter } from '@/components/site-footer';

export default function AboutPage() {
  return <main className="about-page">
    <section className="about-page-hero">
      <div className="about-page-hero-art" aria-hidden="true"><img src="/rajesh-seated-profile.png" alt="" /></div>
      <SiteHeader active="About" />
      <div className="about-page-hero-copy"><p><span /> About Rajesh Nivesh</p><h1>Research with<br /><em>clarity at its centre.</em></h1><p>Rajesh Nivesh is a dedicated platform for market participants who value preparation, process and informed decision-making over speculation.</p></div>
    </section>
    <section className="about-page-story">
      <figure><img src="/rajesh-sharma.png" alt="Rajesh Sharma" /></figure>
      <div><p className="detail-kicker"><span /> The philosophy</p><h2>Elevating your market process with <em>clarity.</em></h2><p>Led by SEBI Registered Research Analyst Rajesh Sharma, Rajesh Nivesh brings together high-quality market insight and practical trading education. The work starts with a simple belief: decisions improve when they are built on context, thoughtful analysis and a clear risk framework.</p><p>We do not treat the market as a place for certainty. Our role is to make research easier to understand and learning easier to apply, so every participant can develop a process that is genuinely their own.</p><div className="about-page-profile"><b>Rajesh Sharma</b><span>SEBI Registered Research Analyst · INH000026628</span></div></div>
    </section>
    <section className="about-principles"><div><p className="detail-kicker"><span /> What guides us</p><h2>Better habits,<br />not market <em>hype.</em></h2></div><div className="about-principle-grid"><article><CircleGauge size={25} /><h3>Context first</h3><p>Research begins with market structure, participation and relevant information—not prediction alone.</p></article><article><ShieldCheck size={25} /><h3>Risk-aware thinking</h3><p>Capital protection, suitability and position sizing belong in every serious market process.</p></article><article><Target size={25} /><h3>Practical learning</h3><p>Courses and workshops focus on repeatable skills, useful checklists and real decision scenarios.</p></article></div></section>
    <PageCta title="Find the support that fits your market journey." href="/services" label="Explore services" />
    <SiteFooter />
  </main>;
}
