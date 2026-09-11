'use client';

import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CandlestickChart,
  Clock,
  Check,
  ChevronDown,
  CircleGauge,
  Compass,
  GraduationCap,
  Landmark,
  Menu,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SiteFooter } from '@/components/site-footer';

const services = [
  [
    '01',
    BarChart3,
    'Market Analysis & Research',
    'Daily technical and fundamental market research, organised to support informed decisions.',
    [
      'Pre-market & post-market reports',
      'Sector rotation & thematic analysis',
      'NSE/BSE stock screening',
    ],
  ],
  [
    '02',
    CandlestickChart,
    'Intraday & BTST Calls',
    'Structured intraday and buy-today-sell-tomorrow research calls with clear trade parameters.',
    [
      'Entry, target & stop-loss levels',
      'Timely Telegram / WhatsApp alerts',
      'Pre-market market view',
    ],
  ],
  [
    '03',
    Target,
    'Options Trading Advisory',
    'Options research for index and stock participants, with clarity on strike selection and risk.',
    [
      'Daily options trade setups',
      'Strike & expiry guidance',
      'Greeks and strategy analysis',
    ],
  ],
  [
    '04',
    TrendingUp,
    'Index Trading',
    'Research-led Nifty and Bank Nifty ideas designed around defined risk and market context.',
    [
      'Nifty positional research',
      'Bank Nifty strategies',
      'Weekly index outlook',
    ],
  ],
  [
    '05',
    Compass,
    'Delivery & Swing Trading',
    'Curated delivery and swing trade research for investors seeking quality opportunities.',
    [
      'Delivery picks each month',
      'Fundamental + technical view',
      'Sector rotation alerts',
    ],
  ],
  [
    '06',
    Landmark,
    'Commodity Advisory (MCX)',
    'Macro-aware commodity research across Gold, Silver, Crude Oil and Natural Gas.',
    ['MCX research calls', 'Global macro analysis', 'Weekly commodity outlook'],
  ],
  [
    '07',
    ShieldCheck,
    'Risk Management Training',
    'Build a more resilient approach with practical capital-protection and position-sizing principles.',
    [
      'Position sizing frameworks',
      'Stop-loss techniques',
      'Portfolio diversification',
    ],
  ],
  [
    '08',
    GraduationCap,
    'Learning Programmes & Courses',
    'Structured learning tracks that take market participants from core concepts to applied analysis.',
    [
      'Foundation to advanced tracks',
      'Live group sessions',
      'Recorded learning access',
    ],
  ],
  [
    '09',
    BriefcaseBusiness,
    'Portfolio Management Guidance',
    'Educational guidance to help you understand allocation, diversification and review disciplines.',
    [
      'Model portfolio concepts',
      'Portfolio review framework',
      'Rebalancing education',
    ],
  ],
] as const;

const courses = [
  [
    'BEGINNER',
    '40 Hours',
    '2,400+',
    '4.9',
    'Stock Market Foundation Course',
    'Everything to start your investment journey: Demat accounts, order types, fundamental analysis and valuation basics.',
    '/course-stock-market-foundation.mp4',
  ],
  [
    'INTERMEDIATE',
    '60 Hours',
    '1,800+',
    '4.8',
    'Technical Analysis Masterclass',
    'Deep dive into charts, patterns, indicators and price action. Learn to read markets like a professional analyst.',
    '/course-technical-analysis.mp4',
  ],
  [
    'ADVANCED',
    '90 Hours',
    '940+',
    '5.0',
    'Pro Trader Complete Program',
    'Advanced derivatives, options strategies, algo basics and portfolio management for serious full-time traders.',
    '/course-pro-trader.mp4',
  ],
  [
    'ADVANCED',
    '32 Hours',
    '760+',
    '4.9',
    'Options Strategy Lab',
    'Build practical option strategies with clear risk, payoff and position-management frameworks.',
    '/course-options-strategy.mp4',
  ],
] as const;

const complaintSources = [
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

const pricingServices = [
  ['Market Analysis & Research', 2499],
  ['Intraday & BTST Calls', 3499],
  ['Options Trading Advisory', 3999],
  ['Index Trading', 2999],
  ['Delivery & Swing Trading', 2499],
  ['Commodity Advisory (MCX)', 2999],
  ['Risk Management Training', 1999],
  ['Learning Programmes & Courses', 4999],
  ['Portfolio Management Guidance', 3499],
] as const;

const pricingTerms = {
  monthly: { label: 'Monthly', detail: 'Month-to-month access', multiplier: 1 },
  quarterly: {
    label: 'Quarterly',
    detail: '3 months · 5% package saving',
    multiplier: 0.95 * 3,
  },
  halfYearly: {
    label: 'Half-yearly',
    detail: '6 months · 10% package saving',
    multiplier: 0.9 * 6,
  },
} as const;

const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Research Services', '#services'],
  ['Learning', '#learning'],
];

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

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Rajesh Nivesh home">
      <img src="/rajesh-nivesh-logo.png" alt="" />
      <span className="brand-name">
        <b>Rajesh</b>
        <em>निवेश</em>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [guidanceVisible, setGuidanceVisible] = useState(false);
  const [showAllSolutions, setShowAllSolutions] = useState(false);
  const [courseSlide, setCourseSlide] = useState(0);
  const [selectedPricingServices, setSelectedPricingServices] = useState<
    string[]
  >([]);
  const [pricingTerm, setPricingTerm] =
    useState<keyof typeof pricingTerms>('monthly');
  const [quoteReady, setQuoteReady] = useState(false);
  const servicesRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const guidanceRef = useRef<HTMLElement | null>(null);
  const courseRailRef = useRef<HTMLDivElement | null>(null);
  const moveCourses = (direction: number) => {
    const next = (courseSlide + direction + courses.length) % courses.length;
    const rail = courseRailRef.current;
    const card = rail?.querySelector<HTMLElement>('.course-slide-card');
    if (rail && card)
      rail.scrollTo({
        left:
          next *
          (card.offsetWidth + Number.parseFloat(getComputedStyle(rail).gap)),
        behavior: 'smooth',
      });
    setCourseSlide(next);
  };
  const togglePricingService = (service: string) => {
    setQuoteReady(false);
    setSelectedPricingServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };
  const pricingSubtotal = pricingServices
    .filter(([service]) => selectedPricingServices.includes(service))
    .reduce((total, [, price]) => total + price, 0);
  const pricingTotal = Math.round(
    pricingSubtotal * pricingTerms[pricingTerm].multiplier,
  );
  const formatInr = (value: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  useEffect(() => {
    const node = servicesRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const node = aboutRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const node = guidanceRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGuidanceVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <main className="reference-page">
      <section id="home" className="hero-reference">
        <header className="site-header">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="hero-actions">
            <a className="quote-button" href="#services">
              Explore research <ArrowRight size={16} />
            </a>
            <span className="grid-menu" aria-hidden="true">
              ⠿
            </span>
          </div>
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          {menuOpen && (
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navigation.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </nav>
          )}
        </header>
        <video
          className="hero-background"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/hero-market-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-copy-reference">
          <h1>
            Navigate Markets
            <br />
            With <span>Research-Led</span>
            <br />
            Clarity &amp; Discipline
          </h1>
          <p>
            <b>✳</b> Professional market research for participants who value
            preparation, process and informed decision-making.
          </p>
          <a className="lime-button" href="#services">
            Explore services <ArrowRight size={17} />
          </a>
        </div>
        <div className="hero-person" aria-hidden="true">
          <img src="/hero-main-portrait.png" alt="" />
        </div>
        <button className="slider-arrow arrow-left" aria-label="Previous slide">
          <ArrowDownRight />
        </button>
        <button className="slider-arrow arrow-right" aria-label="Next slide">
          <ArrowRight />
        </button>
        <div className="hero-scroll">
          Scroll down <ArrowDownRight />
        </div>
        <div className="experience-card">
          <div>
            <strong>
              16<sup>+</sup>
            </strong>
            <p>
              Years of market
              <br />
              learning &amp; research
            </p>
          </div>
          <img src="/hero-experience-portrait.png" alt="" />
        </div>
      </section>
      <section
        ref={aboutRef}
        id="about"
        className={`about-reference ${aboutVisible ? 'is-visible' : ''}`}
      >
        <div className="about-media">
          <div className="about-grid-dots" aria-hidden="true" />
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=85"
              alt="Indian professionals discussing market research"
            />
          </div>
          <div className="about-orange-shape" aria-hidden="true" />
          <div className="about-profile-card">
            <img src="/rajesh-sharma.png" alt="" />
            <div>
              <strong>Rajesh Sharma</strong>
              <span>SEBI Registered Research Analyst</span>
            </div>
          </div>
          <div className="about-arrows">
            <button aria-label="Previous">
              <ArrowDownRight />
            </button>
            <button aria-label="Next">
              <ArrowRight />
            </button>
          </div>
          <div className="happy-card">
            <p>Research views</p>
            <strong>
              1M<sup>+</sup>
            </strong>
            <img src="/rajesh-sharma.png" alt="" />
          </div>
        </div>
        <div className="about-reference-copy">
          <p className="orange-kicker">
            <b>✳</b> About Rajesh Nivesh
          </p>
          <h2>
            Elevating your market
            <br />
            process with <strong>clarity.</strong>
          </h2>
          <p>
            Rajesh Nivesh is a dedicated platform for serious market
            participants who believe in informed decision-making over
            speculation. Led by SEBI Registered Research Analyst Rajesh Sharma,
            the platform delivers high-quality market insights and trading
            education.
          </p>
          <div className="about-roles">
            <div>
              <span>
                <CircleGauge size={22} />
              </span>
              <b>
                Technical &amp; Fundamental
                <br />
                Research
              </b>
            </div>
            <div>
              <span>
                <ShieldCheck size={22} />
              </span>
              <b>
                Risk-Controlled Trading
                <br />
                Perspectives
              </b>
            </div>
          </div>
          <div className="about-points">
            <p>✿ Daily market context and structured research</p>
            <p>✿ Learning designed around discipline, not hype</p>
          </div>
          <a className="dark-button" href="#services">
            More about <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section
        ref={servicesRef}
        id="services"
        className={`services-reference ${servicesVisible ? 'is-visible' : ''}`}
      >
        <div className="solutions-shell">
          <div className="solutions-heading">
            <div>
              <p className="orange-kicker">
                <b>✳</b> Our solutions
              </p>
              <h2>
                <span>Providing the best</span> <strong>solutions</strong>
                <br />
                for your business
              </h2>
            </div>
            <button
              className="view-services"
              type="button"
              aria-expanded={showAllSolutions}
              onClick={() => setShowAllSolutions(!showAllSolutions)}
            >
              {showAllSolutions
                ? 'Show featured services'
                : 'View all services'}{' '}
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="solution-progress" aria-hidden="true">
            <i />
            <span />
          </div>
          <div className="solutions-cards">
            {services
              .slice(0, showAllSolutions ? services.length : 3)
              .map(([number, Icon, title, description], index) => (
                <article
                  key={title}
                  className="solution-card"
                  style={
                    { '--delay': `${index * 110}ms` } as React.CSSProperties
                  }
                >
                  <div className="solution-image">
                    {index === 0 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-market-analysis.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : index === 1 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-intraday-btst.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : index === 2 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-options-advisory.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : index === 3 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-index-trading.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : index === 4 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-delivery-swing.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : index === 5 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-commodity-advisory.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : index === 6 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-risk-management.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : index === 7 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-learning-programmes.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : index === 8 ? (
                      <video autoPlay muted loop playsInline aria-hidden="true">
                        <source
                          src="/service-portfolio-management.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src="https://images.unsplash.com/photo-1770626894265-bdb99db109f1?auto=format&fit=crop&w=1200&q=85"
                        alt="Indian financial professional"
                      />
                    )}
                  </div>
                  <span className="solution-symbol">
                    {index === 0 ? (
                      <Target size={43} strokeWidth={2.35} />
                    ) : (
                      <Icon size={41} strokeWidth={2.2} />
                    )}
                  </span>
                  <div className="solution-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a
                      href={
                        index === 0
                          ? '/market-analysis-research'
                          : '#disclaimer'
                      }
                    >
                      <i />
                      <span className="learn-more-label">
                        Learn more <ArrowRight size={16} />
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
      <section
        ref={guidanceRef}
        id="learning"
        className={`market-guidance ${guidanceVisible ? 'is-visible' : ''}`}
      >
        <div className="guidance-grid">
          <div className="guidance-intro">
            <p className="guidance-kicker">
              <b>✳</b> Research-led learning
            </p>
            <h2>
              Build a more
              <br />
              disciplined market
              <br />
              <strong>process.</strong>
            </h2>
            <p>
              A clearer market process starts with practical context, structured
              learning and a disciplined view of risk.
            </p>
            <ul>
              <li>
                <Check size={15} /> Research before every decision
              </li>
              <li>
                <Check size={15} /> Process over prediction
              </li>
            </ul>
            <a className="guidance-button" href="#disclaimer">
              Explore learning <ArrowRight size={17} />
            </a>
          </div>
          <div className="guidance-portrait" aria-hidden="true">
            <img src="/rajesh-guidance-portrait.png" alt="" />
          </div>
          <div className="guidance-benefits">
            <h3>
              <span>
                <Check size={28} />
              </span>
              Guidance for a more
              <br />
              confident market journey
            </h3>
            <div className="guidance-rule" />
            <div className="guidance-benefit">
              <span>
                <CircleGauge size={31} />
              </span>
              <div>
                <h4>Daily Market Context</h4>
                <p>
                  Start with a structured view of market conditions, key levels
                  and evolving themes.
                </p>
              </div>
            </div>
            <div className="guidance-benefit">
              <span>
                <GraduationCap size={31} />
              </span>
              <div>
                <h4>Practical Learning</h4>
                <p>
                  Build capability through concepts and methods that can be
                  applied with discipline.
                </p>
              </div>
            </div>
            <div className="guidance-benefit">
              <span>
                <ShieldCheck size={31} />
              </span>
              <div>
                <h4>Risk-First Thinking</h4>
                <p>
                  Keep capital protection, position sizing and patience at the
                  centre of every plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-grid">
          <div>
            <p className="eyebrow">
              <span /> Start with clarity
            </p>
            <h2>
              Make room for a<br />
              <i>better market process.</i>
            </h2>
          </div>
          <div>
            <p>
              Explore the research service or learning programme that fits where
              you are today. No shortcuts—just a more structured way to engage
              with the markets.
            </p>
            <a className="button button-light" href="#services">
              View all services <ArrowRight />
            </a>
          </div>
        </div>
        <div className="cta-graphic" aria-hidden="true">
          RN
        </div>
      </section>
      <section className="courses-showcase" aria-labelledby="courses-title">
        <div className="courses-showcase-head">
          <p className="courses-kicker">
            <b>✳</b> Learning programmes
          </p>
          <h2 id="courses-title">
            Build your edge with
            <br />
            <strong>market-ready learning.</strong>
          </h2>
          <p>
            Clear, practical learning tracks designed to take you from
            foundations to more confident decision-making.
          </p>
        </div>
        <div className="course-viewport">
          <div className="course-rail" ref={courseRailRef}>
            {courses.map(
              (
                [level, duration, learners, rating, title, description, video],
                index,
              ) => (
                <article className="course-slide-card" key={title}>
                  <div className="course-cover">
                    <video
                      src={video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label={`${title} course preview`}
                    />
                    <span
                      className={`course-level level-${level.toLowerCase()}`}
                    >
                      {level}
                    </span>
                    <a
                      className="course-hover-link"
                      href="#disclaimer"
                      aria-label={`View details for ${title}`}
                    >
                      <ArrowRight size={25} />
                    </a>
                  </div>
                  <div className="course-details">
                    <div className="course-stats">
                      <span>
                        <Clock size={14} /> {duration}
                      </span>
                      <span>
                        <Users size={15} /> {learners}
                      </span>
                      <span>
                        <Star size={15} /> {rating}
                      </span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="course-action">
                      <a href="#disclaimer">
                        Enrol now <ArrowRight size={16} />
                      </a>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
        <div className="courses-controls">
          <div className="course-progress" aria-hidden="true">
            <i style={{ transform: `translateX(${courseSlide * 100}%)` }} />
          </div>
          <div className="course-buttons">
            <button
              type="button"
              onClick={() => moveCourses(-1)}
              aria-label="Previous courses"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => moveCourses(1)}
              aria-label="Next courses"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="course-count">
            <b>{String(courseSlide + 1).padStart(2, '0')}</b> /{' '}
            {String(courses.length).padStart(2, '0')}
          </div>
        </div>
      </section>
      <section
        className="achievement-strip"
        aria-label="Rajesh Nivesh achievements"
      >
        <div className="achievement-strip-copy">
          Built on <b>16+ years</b> of market learning, research and disciplined
          decision-making.
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
      <section className="pricing-section" aria-labelledby="pricing-title">
        <div className="pricing-heading">
          <p className="courses-kicker">
            <b>✳</b> Indicative pricing
          </p>
          <h2 id="pricing-title">
            Build your own <strong>research package.</strong>
          </h2>
          <p>
            Select the services you need, choose the coverage period, and see
            your estimated package total in INR.
          </p>
        </div>
        <div className="pricing-builder">
          <div className="pricing-choices">
            <div className="pricing-choice-heading">
              <h3>Choose services</h3>
              <span>{selectedPricingServices.length} selected</span>
            </div>
            <div className="pricing-service-list">
              {pricingServices.map(([service, price]) => (
                <label
                  className={`pricing-service ${selectedPricingServices.includes(service) ? 'is-selected' : ''}`}
                  key={service}
                >
                  <input
                    type="checkbox"
                    checked={selectedPricingServices.includes(service)}
                    onChange={() => togglePricingService(service)}
                  />
                  <span className="pricing-checkbox">
                    <Check size={14} />
                  </span>
                  <span>{service}</span>
                  <b>
                    {formatInr(price)}
                    <small>/ month</small>
                  </b>
                </label>
              ))}
            </div>
            <fieldset className="pricing-period">
              <legend>Choose a package period</legend>
              <div>
                {(
                  Object.entries(pricingTerms) as [
                    keyof typeof pricingTerms,
                    (typeof pricingTerms)[keyof typeof pricingTerms],
                  ][]
                ).map(([term, option]) => (
                  <button
                    className={pricingTerm === term ? 'is-active' : ''}
                    key={term}
                    type="button"
                    onClick={() => {
                      setPricingTerm(term);
                      setQuoteReady(false);
                    }}
                  >
                    <b>{option.label}</b>
                    <span>{option.detail}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <aside className="pricing-summary">
            <p>Your estimated total</p>
            <strong aria-live="polite">{formatInr(pricingTotal)}</strong>
            <span>
              {pricingTerms[pricingTerm].label} package ·{' '}
              {selectedPricingServices.length || 'No'} service
              {selectedPricingServices.length === 1 ? '' : 's'}
            </span>
            <div className="pricing-summary-rule" />
            <p className="pricing-summary-note">
              Indicative pricing only. Final rates will be confirmed once the
              service plan is reviewed with you.
            </p>
            <button
              type="button"
              disabled={!selectedPricingServices.length}
              onClick={() => setQuoteReady(true)}
            >
              Prepare my quotation <ArrowRight size={18} />
            </button>
            {quoteReady && (
              <p className="pricing-confirmation" role="status">
                Your {pricingTerms[pricingTerm].label.toLowerCase()} estimate
                for {selectedPricingServices.length} selected service
                {selectedPricingServices.length === 1 ? '' : 's'} is ready for
                review.
              </p>
            )}
          </aside>
        </div>
      </section>
      <section
        className="complaints-section"
        aria-labelledby="complaints-title"
      >
        <div className="complaints-heading">
          <p className="courses-kicker">
            <b>✳</b> SEBI compliance
          </p>
          <h2 id="complaints-title">
            Investor complaint <strong>board.</strong>
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
                {complaintSources.map((source, index) => (
                  <tr key={source}>
                    <td>{index + 1}</td>
                    <td>{source}</td>
                    {Array.from({ length: 6 }).map((_, valueIndex) => (
                      <td key={valueIndex}>
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
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>
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
                <b>*</b> Inclusive of complaints of previous months resolved in
                the current month.
              </p>
              <p>
                <b>#</b> Inclusive of complaints pending as on the last day of
                the month.
              </p>
              <p>
                <b>^</b> Average of total complaints resolved during the month
                including complaints of previous months.
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
            <b>^Avg Time:</b> Total resolution days ÷ resolved complaints.
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
      <SiteFooter />
    </main>
  );
}
