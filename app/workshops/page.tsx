import { CalendarDays, MessageCircle, NotebookPen } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { PageCta } from '@/components/page-cta';
import { SiteFooter } from '@/components/site-footer';

export default function WorkshopsPage() {
  return <main className="workshops-page"><section className="workshops-hero"><video autoPlay muted loop playsInline aria-hidden="true"><source src="/service-portfolio-management.mp4" type="video/mp4" /></video><div /><SiteHeader active="Workshops" /><div><p><span /> Live market workshops</p><h1>Practice the process<br /><em>with real market context.</em></h1><p>Focused sessions designed to turn research, risk and review into habits you can carry into your own routine.</p></div></section>
  <section className="workshops-empty"><div className="workshops-empty-icon"><CalendarDays size={34} /></div><p className="detail-kicker"><span /> Upcoming sessions</p><h2>No workshops<br />scheduled <em>right now.</em></h2><p>New workshop dates will be announced here. In the meantime, you can explore our courses or write to us about the market topic you would like to work through.</p><div><a href="/learning">Explore courses</a><a href="/contact">Suggest a workshop</a></div></section>
  <section className="workshop-expect"><div><p className="detail-kicker"><span /> When sessions open</p><h2>Built to be practical,<br /><em>not performative.</em></h2></div><div>{[[MessageCircle,'Work through questions','Bring the decisions and obstacles that matter in your own process.'],[NotebookPen,'Leave with a framework','Every session is designed around tools, templates and reflection you can use again.'],[CalendarDays,'Stay informed','Use the contact page to ask about future dates or propose a topic.']].map(([Icon,title,copy]) => { const ItemIcon = Icon as typeof MessageCircle; return <article key={String(title)}><ItemIcon size={24}/><h3>{String(title)}</h3><p>{String(copy)}</p></article> })}</div></section>
  <PageCta title="Want to hear about the next workshop?" href="/contact" label="Contact us" />
  <SiteFooter /></main>;
}
