'use client';

import { ArrowUpRight, Users } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

const faqs = [
  [
    'What does a research service include?',
    'Each service is structured around its purpose, with clear market context, relevant observations and practical educational material. The exact scope is explained before you begin.',
  ],
  [
    'How do I choose the right service?',
    'Start with your experience, market interest and time horizon. The service descriptions help you compare research, trading and learning options before deciding what fits your process.',
  ],
  [
    'Are the learning programmes suitable for beginners?',
    'Yes. The learning tracks begin with market foundations and gradually introduce applied analysis, risk management and decision-making frameworks.',
  ],
] as const;

export function ServicesFaq() {
  const [openFaq, setOpenFaq] = useState(1);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sealPathId = useId();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services-faq ${visible ? 'is-visible' : ''}`}
      aria-labelledby="faq-title"
    >
      <div className="services-faq-copy">
        <p className="services-faq-kicker"><span>*</span> Frequently asked questions</p>
        <h2 id="faq-title">
          Have a question?
          <br />
          We&apos;ve got the <strong>answers</strong> you need.
        </h2>
        <div className="services-faq-accordion">
          {faqs.map(([question, answer], index) => {
            const isOpen = index === openFaq;
            return (
              <article className={`services-faq-item ${isOpen ? 'is-open' : ''}`} key={question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{question}</span>
                  <i aria-hidden="true" />
                </button>
                <div className="services-faq-answer">
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="services-faq-visual">
        <div className="services-faq-dots" aria-hidden="true" />
        <figure>
          <img src="/rajesh-faq-portrait.png" alt="Rajesh Sharma" />
        </figure>
        <aside className="services-faq-members">
          <span className="services-faq-members-icon"><Users size={27} /></span>
          <h3>Meet fellow market learners and research participants.</h3>
          <div>
            <span className="services-faq-avatars" aria-label="Community members">
              <img src="/faq-member-1.png" alt="" />
              <img src="/faq-member-2.png" alt="" />
              <img src="/faq-member-3.png" alt="" />
            </span>
            <b>36+ members</b>
          </div>
        </aside>
        <span className="services-faq-seal" aria-hidden="true">
          <ArrowUpRight size={31} />
          <svg className="services-faq-seal-text" viewBox="0 0 145 145" focusable="false">
            <defs>
              <path id={sealPathId} d="M72.5 18.5a54 54 0 1 1 0 108a54 54 0 1 1 0-108" />
            </defs>
            <text textLength="322" lengthAdjust="spacing">
              <textPath href={`#${sealPathId}`} startOffset="1%">
                CLARITY • DISCIPLINE • RESEARCH • MARKET INSIGHTS • CLARITY •
              </textPath>
            </text>
          </svg>
        </span>
      </div>
    </section>
  );
}
