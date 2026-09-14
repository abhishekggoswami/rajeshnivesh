import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { ServicesFaq } from '@/components/services-faq';
import { SiteFooter } from '@/components/site-footer';

const documents = [
  [
    'Investor Charter for Research Analysts',
    'https://docs.google.com/document/d/1MUUOF-Y1daPwAFhzFUSI0y2s-pXWIOYF/edit?usp=drive_link&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Monthly Investor Complaint Data',
    'https://docs.google.com/spreadsheets/d/1NVOzDipbdIlpJOcYfTZGLMAxPY-nJiOA/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Grievance Redressal',
    'https://docs.google.com/document/d/1IoiR9O0xNP3c5kvaSsGw82CO4CcNQ3ob/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Website Disclaimer',
    'https://docs.google.com/document/d/10s2xxGRmQwF_PnvHOBwiLU7XuXOD2STz/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Research Analyst Disclosures',
    'https://docs.google.com/document/d/10lPhnDXsPMBUtm6V95lFkhhlhBtIYhcN/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Grievance Escalation Matrix',
    'https://docs.google.com/document/d/1bKYV0-9agWvs2aX8atiQV9cN9rEHyowr/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Annual Compliance Audit Status',
    'https://docs.google.com/document/d/1zlAT1I8V_0zBBIOprGSvxJaK9jZbYesi/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Code of Conduct',
    'https://docs.google.com/document/d/1cVufRz2hPk1lyi5Jw9rrqGDip-1e6And/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Anti-Money Laundering Policy',
    'https://docs.google.com/document/d/14CC5KSObcZQFohppStJ9Vn1K5n0kNrwz/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
  [
    'Website Display Requirements',
    'https://docs.google.com/document/d/1EL3ZQ3lGgApX88TQKpysNB3itvxPvJXq/edit?usp=sharing&ouid=115717210349359329901&rtpof=true&sd=true',
  ],
] as const;
const sources = [
  'Directly from Investors',
  'SEBI (SCORES)',
  'Other Sources (if any)',
];
const monthlyComplaintTrend = [
  'Sep-25',
  'Oct-25',
  'Nov-25',
  'Dec-25',
  'Jan-26',
  'Feb-26',
  'Mar-26',
  'Apr-26',
  'May-26',
  'Jun-26',
  'Jul-26',
  'Aug-26',
];

export default function CompliancePage() {
  return (
    <main className="compliance-page">
      <section className="compliance-hero">
        <video autoPlay muted loop playsInline aria-hidden="true">
          <source src="/landing-background.mp4" type="video/mp4" />
        </video>
        <div />
        <SiteHeader active="Compliance" />
        <div>
          <p>
            <span /> Investor information
          </p>
          <h1>
            Compliance with
            <br />
            <em>clarity and care.</em>
          </h1>
          <p>
            Policies, investor disclosures and complaint information presented
            in one accessible place.
          </p>
          <a href="#complaint-board">
            View complaint board <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section id="complaint-board" className="compliance-board-section">
        <div className="compliance-board-heading">
          <p className="detail-kicker">
            <span /> SEBI compliance
          </p>
          <h2>
            Investor complaint <em>board.</em>
          </h2>
          <p>
            Complaint data is disclosed monthly for transparency, in accordance
            with SEBI requirements for Research Analysts.
          </p>
        </div>
        <div className="complaint-board">
          <div className="complaint-board-title">
            <div>
              <b>Annexure – B</b>
              <span>Complaint data to be displayed by RAs</span>
            </div>
            <p>
              Data for the month ending:<strong>31st August, 2026</strong>
            </p>
          </div>
          <div className="complaint-table-wrap">
            <table className="complaint-table">
              <thead>
                <tr>
                  <th>
                    Sr.
                    <br />
                    No.
                  </th>
                  <th>Received from</th>
                  <th>
                    Pending at last
                    <br />
                    month end
                  </th>
                  <th>Received</th>
                  <th>Resolved*</th>
                  <th>Total pending#</th>
                  <th>
                    Pending
                    <br />
                    &gt; 3 months
                  </th>
                  <th>
                    Avg. resolution
                    <br />
                    time (days)^
                  </th>
                </tr>
              </thead>
              <tbody>
                {sources.map((source, index) => (
                  <tr key={source}>
                    <td>{index + 1}</td>
                    <td>{source}</td>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <td key={i}>
                        <span className="complaint-zero">0</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>—</th>
                  <th>Grand total</th>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <td key={i}>
                      <span className="complaint-total">0</span>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="complaint-board-notes">
            <div>
              <p>
                <b>*</b> Includes previous months’ complaints resolved in the
                current month.
              </p>
              <p>
                <b>#</b> Includes complaints pending as on the last day of the
                month.
              </p>
              <p>
                <b>^</b> Average of complaints resolved during the month,
                including prior months.
              </p>
            </div>
            <p>
              <b>SEBI Registered Research Analyst</b>
              <br />
              Rajesh Nivesh | Registration No.: INH000026628
            </p>
          </div>
        </div>
        <div className="complaint-key">
          <span>
            <b>*Resolved:</b> Includes previous months&apos; complaints resolved
            in current month.
          </span>
          <span>
            <b>#Pending:</b> Includes complaints pending at month end.
          </span>
          <span>
            <b>^Avg Time:</b> Total resolution days divided by resolved
            complaints.
          </span>
          <span>
            Also lodge at <u>scores.sebi.gov.in</u>
          </span>
        </div>
        <div className="complaint-board complaint-trend-board">
          <div className="complaint-board-title">
            <div>
              <b>Trend of monthly complaint disposal</b>
              <span>(Sep-25 – Aug-26)</span>
            </div>
          </div>
          <div className="complaint-table-wrap">
            <table className="complaint-table complaint-trend-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Carried forward</th>
                  <th>Received</th>
                  <th>Resolved*</th>
                  <th>Pending#</th>
                </tr>
              </thead>
              <tbody>
                {monthlyComplaintTrend.map((month) => (
                  <tr key={month}>
                    <td>{month}</td>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <td key={index}>0</td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Grand total</th>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>0</td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
      <section className="compliance-mint-strip" aria-labelledby="compliance-support-title">
        <ShieldCheck size={28} aria-hidden="true" />
        <div>
          <p>Investor support</p>
          <h2 id="compliance-support-title">
            Find the right information with confidence.
          </h2>
          <span>
            Browse disclosures, review the latest complaint data or contact us
            for help with an investor-information or grievance question.
          </span>
        </div>
        <a href="/contact">
          Contact support <ArrowRight size={17} />
        </a>
      </section>
      <section className="compliance-library">
        <div>
          <p className="detail-kicker">
            <span /> Document library
          </p>
          <h2>
            Investor information
            <br />
            at your <em>fingertips.</em>
          </h2>
          <p>
            Read the relevant documents before making an investment decision or
            raising a concern.
          </p>
        </div>
        <nav>
          {documents.map(([label, href], index) => (
            <a key={href} href={href} target="_blank" rel="noreferrer">
              <span>{String(index + 1).padStart(2, '0')}</span>
              {label}
              <ExternalLink size={15} />
            </a>
          ))}
        </nav>
      </section>
      <ServicesFaq variant="compliance" />
      <SiteFooter />
    </main>
  );
}
