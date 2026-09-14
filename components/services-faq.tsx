'use client';

import { ArrowUpRight, Users } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

const serviceFaqs = [
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

const faqSets = {
  services: serviceFaqs,
  home: [
    [
      'What can I explore on Rajesh Nivesh?',
      'You can explore research services, structured learning programmes, workshops and investor information in one place.',
    ],
    [
      'How should I begin?',
      'Start with the area where you need clarity. The service and course pages outline the purpose, scope and next step for each option.',
    ],
    [
      'Where can I find investor disclosures?',
      'The Compliance page brings together investor information, complaint data and relevant disclosure documents.',
    ],
  ],
  about: [
    [
      'Who is Rajesh Nivesh for?',
      'The platform is for market participants who value preparation, research and a disciplined decision-making process.',
    ],
    [
      'What guides the research approach?',
      'The approach begins with context, practical analysis and risk awareness rather than certainty or market hype.',
    ],
    [
      'How can I explore the available support?',
      'Visit the Services and Learning pages to compare the research services and programmes that fit your current stage.',
    ],
  ],
  learning: [
    [
      'Which course should I begin with?',
      'Start with the Stock Market Foundation Course if you are new to markets. Each course page explains its level, outcome and curriculum.',
    ],
    [
      'What will I learn in a course?',
      'Every programme focuses on usable concepts, practice exercises, review habits and a clear final learning outcome.',
    ],
    [
      'Can I ask about a specific programme?',
      'Yes. Use the Contact page to ask a question about a course outcome or the skills it covers.',
    ],
  ],
  course: [
    [
      'How should I use this curriculum?',
      'Work through the modules in order, pause to practise each topic and return to the exercises as you develop your own routine.',
    ],
    [
      'What is the intended outcome?',
      'The aim is a usable market process: clearer observations, better risk awareness and a structured way to review decisions.',
    ],
    [
      'Can I clarify a module before starting?',
      'Yes. Contact us with the course name and the topic you would like explained.',
    ],
  ],
  compliance: [
    [
      'Where can I find investor disclosures?',
      'The document library on this page contains the investor charter, disclosures, grievance information and related policies.',
    ],
    [
      'How is complaint data displayed?',
      'The complaint board is presented as monthly investor information in line with the stated Research Analyst disclosure requirements.',
    ],
    [
      'Who should I contact for a document-related question?',
      'Use the Contact page for help finding an investor-information or grievance-related document.',
    ],
  ],
  workshops: [
    [
      'Are workshops currently scheduled?',
      'There are no workshops scheduled at the moment. Future sessions will be announced on this page.',
    ],
    [
      'What will a workshop focus on?',
      'Sessions are designed around practical market questions, applied frameworks and review habits that participants can use again.',
    ],
    [
      'Can I suggest a workshop topic?',
      'Yes. Use the Contact page to suggest a market topic you would like to work through in a future session.',
    ],
  ],
  contact: [
    [
      'What can I contact you about?',
      'You can ask about a research service, a learning programme, a workshop topic or investor-information support.',
    ],
    [
      'Can you help me choose the right next step?',
      'Yes. Share the area where you need clarity and we will point you to the most relevant page or resource.',
    ],
    [
      'Where are compliance documents available?',
      'The Compliance page has the relevant investor disclosures, complaint board and grievance information.',
    ],
  ],
  research: [
    [
      'What is the purpose of the research service?',
      'The service helps participants review market context, price structure and relevant observations with a more disciplined framework.',
    ],
    [
      'Does research replace my own judgement?',
      'No. You remain responsible for assessing suitability, financial circumstances and risk tolerance before acting on any information.',
    ],
    [
      'Where can I read the disclosures?',
      'Investor disclosures and related documents are available on the Compliance page.',
    ],
  ],
} as const;

type FaqVariant = keyof typeof faqSets;

export function ServicesFaq({
  variant = 'services',
}: {
  variant?: FaqVariant;
}) {
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
        <p className="services-faq-kicker">
          <span>*</span> Frequently asked questions
        </p>
        <h2 id="faq-title">
          Have a question?
          <br />
          We&apos;ve got the <strong>answers</strong> you need.
        </h2>
        <div className="services-faq-accordion">
          {faqSets[variant].map(([question, answer], index) => {
            const isOpen = index === openFaq;
            return (
              <article
                className={`services-faq-item ${isOpen ? 'is-open' : ''}`}
                key={question}
              >
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
          <span className="services-faq-members-icon">
            <Users size={27} />
          </span>
          <h3>Meet fellow market learners and research participants.</h3>
          <div>
            <span
              className="services-faq-avatars"
              aria-label="Community members"
            >
              <img src="/faq-member-1.png" alt="" />
              <img src="/faq-member-2.png" alt="" />
              <img src="/faq-member-3.png" alt="" />
            </span>
            <b>36+ members</b>
          </div>
        </aside>
        <span className="services-faq-seal" aria-hidden="true">
          <ArrowUpRight size={31} />
          <svg
            className="services-faq-seal-text"
            viewBox="0 0 145 145"
            focusable="false"
          >
            <defs>
              <path
                id={sealPathId}
                d="M72.5 18.5a54 54 0 1 1 0 108a54 54 0 1 1 0-108"
              />
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
