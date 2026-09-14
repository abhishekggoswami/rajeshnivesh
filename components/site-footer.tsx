import { ArrowRight, Mail } from 'lucide-react';

const navigation = [
  ['Home', '/'],
  ['About', '/about'],
  ['Research Services', '/services'],
  ['Learning', '/learning'],
  ['Compliance', '/compliance'],
  ['Workshops', '/workshops'],
  ['Contact', '/contact'],
] as const;

const researchServices = [
  ['Market Analysis & Research', '/market-analysis-research'],
  ['Intraday & BTST Calls', '/services/intraday-btst-calls'],
  ['Options Trading Advisory', '/services/options-trading-advisory'],
  ['Index Trading', '/services/index-trading'],
] as const;

const complianceDocuments = [
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

function FooterBrand() {
  return (
    <a className="brand" href="/" aria-label="Rajesh Nivesh home">
      <img src="/rajesh-nivesh-brandmark.png" alt="Rajesh Nivesh" />
      <span className="brand-name">
        <b>Rajesh</b>
        <em>निवेश</em>
      </span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="disclaimer" className="footer">
      <div className="footer-consult">
        <h2>Need guidance before you begin?</h2>
        <a href="/#services">
          <span>
            <Mail size={25} />
          </span>
          <div>
            <small>Explore with confidence</small>
            <b>Research &amp; learning support</b>
          </div>
          <ArrowRight size={19} />
        </a>
      </div>
      <div className="footer-main">
        <div className="footer-intro">
          <FooterBrand />
          <p>
            Rajesh Nivesh provides research and education designed to support
            informed market participation.
          </p>
          <div className="footer-tags">
            <span>Research-led</span>
            <span>SEBI registered</span>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <h3>Explore</h3>
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <a href="/#disclaimer">Disclosures</a>
        </nav>
        <nav className="footer-links" aria-label="Research services">
          <h3>Research services</h3>
          {researchServices.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-newsletter">
          <h3>Stay updated</h3>
          <p>
            Practical market learning and research updates, delivered with
            clarity.
          </p>
          <div className="footer-subscribe">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter email"
            />
            <button type="button" aria-label="Subscribe to updates">
              <ArrowRight size={18} />
            </button>
          </div>
          <small>Receive research and learning updates.</small>
        </div>
      </div>
      <section
        className="footer-compliance"
        aria-label="SEBI registration and compliance documents"
      >
        <div className="footer-registration">
          <p className="footer-compliance-kicker">
            SEBI registered research analyst
          </p>
          <h3>Rajesh Sharma</h3>
          <p className="footer-registration-number">
            Registration No. <b>INH000026628</b>
          </p>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:sharmaarajessh@gmail.com">
                  sharmaarajessh@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt>Telephone</dt>
              <dd>
                <a href="tel:+918595587206">+91 85955 87206</a>
              </dd>
            </div>
            <div>
              <dt>Fax</dt>
              <dd>0008595587206</dd>
            </div>
            <div>
              <dt>Validity</dt>
              <dd>05 May 2026 – Perpetual</dd>
            </div>
            <div className="footer-registration-address">
              <dt>Registered &amp; correspondence address</dt>
              <dd>
                RZ 25A, 1st Floor, Indira Park Extension Part 1, Uttam Nagar,
                New Delhi, National Capital Territory of Delhi, 110059
              </dd>
            </div>
          </dl>
        </div>
        <div className="footer-compliance-library">
          <div>
            <p className="footer-compliance-kicker">Investor information</p>
            <h3 id="compliance-documents-title">Compliance documents</h3>
            <p>Policies, disclosures and investor information.</p>
          </div>
          <nav
            className="footer-compliance-links"
            aria-labelledby="compliance-documents-title"
          >
            {complianceDocuments.map(([label, href], index) => (
              <a key={href} href={href} target="_blank" rel="noreferrer">
                <span>{String(index + 1).padStart(2, '0')}</span>
                {label}
                <ArrowRight size={13} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </section>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Rajesh Nivesh. All rights reserved.
        </span>
        <span>SEBI Registered Research Analyst · INH000026628</span>
        <span>
          Investments in securities market are subject to market risks. Read all
          related documents carefully before investing.
        </span>
      </div>
    </footer>
  );
}
