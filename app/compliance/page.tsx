import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { PageCta } from '@/components/page-cta';
import { SiteFooter } from '@/components/site-footer';

const documents = [
  ['Investor Charter for Research Analysts', 'https://docs.google.com/document/d/1MUUOF-Y1daPwAFhzFUSI0y2s-pXWIOYF/edit?usp=drive_link&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Monthly Investor Complaint Data', 'https://docs.google.com/spreadsheets/d/1NVOzDipbdIlpJOcYfTZGLMAxPY-nJiOA/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Grievance Redressal', 'https://docs.google.com/document/d/1IoiR9O0xNP3c5kvaSsGw82CO4CcNQ3ob/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Website Disclaimer', 'https://docs.google.com/document/d/10s2xxGRmQwF_PnvHOBwiLU7XuXOD2STz/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Research Analyst Disclosures', 'https://docs.google.com/document/d/10lPhnDXsPMBUtm6V95lFkhhlhBtIYhcN/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Grievance Escalation Matrix', 'https://docs.google.com/document/d/1bKYV0-9agWvs2aX8atiQV9cN9rEHyowr/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Annual Compliance Audit Status', 'https://docs.google.com/document/d/1zlAT1I8V_0zBBIOprGSvxJaK9jZbYesi/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Code of Conduct', 'https://docs.google.com/document/d/1cVufRz2hPk1lyi5Jw9rrqGDip-1e6And/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Anti-Money Laundering Policy', 'https://docs.google.com/document/d/14CC5KSObcZQFohppStJ9Vn1K5n0kNrwz/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
  ['Website Display Requirements', 'https://docs.google.com/document/d/1EL3ZQ3lGgApX88TQKpysNB3itvxPvJXq/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true'],
] as const;
const sources = ['Directly from Investors', 'SEBI (SCORES)', 'Other Sources (if any)'];

export default function CompliancePage() {
  return <main className="compliance-page"><section className="compliance-hero"><video autoPlay muted loop playsInline aria-hidden="true"><source src="/hero-market-video.mp4" type="video/mp4" /></video><div /><SiteHeader active="Compliance" /><div><p><span /> Investor information</p><h1>Compliance with<br /><em>clarity and care.</em></h1><p>Policies, investor disclosures and complaint information presented in one accessible place.</p><a href="#complaint-board">View complaint board <ArrowRight size={17}/></a></div></section>
  <section id="complaint-board" className="compliance-board-section"><div className="compliance-board-heading"><p className="detail-kicker"><span /> SEBI compliance</p><h2>Investor complaint <em>board.</em></h2><p>Complaint data is disclosed monthly for transparency, in accordance with SEBI requirements for Research Analysts.</p></div><div className="complaint-board"><div className="complaint-board-title"><div><b>Annexure – B</b><span>Complaint data to be displayed by RAs</span></div><p>Data for the month ending:<strong>31st August, 2026</strong></p></div><div className="complaint-table-wrap"><table className="complaint-table"><thead><tr><th>Sr.<br />No.</th><th>Received from</th><th>Pending at last<br />month end</th><th>Received</th><th>Resolved*</th><th>Total pending#</th><th>Pending<br />&gt; 3 months</th><th>Avg. resolution<br />time (days)^</th></tr></thead><tbody>{sources.map((source, index) => <tr key={source}><td>{index + 1}</td><td>{source}</td>{Array.from({ length: 6 }).map((_, i) => <td key={i}><span className="complaint-zero">0</span></td>)}</tr>)}</tbody><tfoot><tr><th>—</th><th>Grand total</th>{Array.from({ length: 6 }).map((_, i) => <td key={i}><span className="complaint-total">0</span></td>)}</tr></tfoot></table></div><div className="complaint-board-notes"><div><p><b>*</b> Includes previous months’ complaints resolved in the current month.</p><p><b>#</b> Includes complaints pending as on the last day of the month.</p><p><b>^</b> Average of complaints resolved during the month, including prior months.</p></div><p><b>SEBI Registered Research Analyst</b><br />Rajesh Nivesh | Registration No.: INH000026628</p></div></div></section>
  <section className="compliance-library"><div><p className="detail-kicker"><span /> Document library</p><h2>Investor information<br />at your <em>fingertips.</em></h2><p>Read the relevant documents before making an investment decision or raising a concern.</p></div><nav>{documents.map(([label, href], index) => <a key={href} href={href} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, '0')}</span>{label}<ExternalLink size={15}/></a>)}</nav></section>
  <section className="compliance-help"><ShieldCheck size={27}/><div><h2>Need help finding the right document?</h2><p>Write to us if you need guidance on an investor-information or grievance-related question.</p></div><a href="/contact">Contact support <ArrowRight size={17}/></a></section>
  <PageCta title="Clear information supports better decisions." href="/contact" label="Ask a question" />
  <SiteFooter /></main>;
}
