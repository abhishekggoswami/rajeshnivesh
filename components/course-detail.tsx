import { ArrowRight, Check, Clock, GraduationCap } from 'lucide-react';
import { type Course } from '@/lib/course-data';
import { SiteHeader } from '@/components/site-header';
import { PageCta } from '@/components/page-cta';
import { ServicesFaq } from '@/components/services-faq';
import { SiteFooter } from '@/components/site-footer';

export function CourseDetail({ course }: { course: Course }) {
  return (
    <main className="course-detail-page">
      <section className="course-detail-hero">
        <video autoPlay muted loop playsInline aria-hidden="true">
          <source src="/landing-background.mp4" type="video/mp4" />
        </video>
        <div className="course-detail-overlay" />
        <SiteHeader active="Learning" />
        <div className="course-detail-copy">
          <p>
            <span /> {course.level} learning programme
          </p>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <a href="#curriculum">
            See the curriculum <ArrowRight size={17} />
          </a>
        </div>
        <div className="course-detail-meta">
          <Clock size={20} />
          <span>
            <b>{course.duration}</b>
            <small>Structured course time</small>
          </span>
        </div>
      </section>
      <section
        id="curriculum"
        className="service-detail-workspace course-detail-workspace"
      >
        <aside className="service-detail-rail">
          <div className="service-detail-rail-details">
            <p className="service-detail-kicker">
              <span /> Course details
            </p>
            <dl>
              <div>
                <dt>Course</dt>
                <dd>{course.title}</dd>
              </div>
              <div>
                <dt>Level</dt>
                <dd>{course.level}</dd>
              </div>
              <div>
                <dt>Learning time</dt>
                <dd>{course.duration}</dd>
              </div>
              <div>
                <dt>Participants</dt>
                <dd>{course.learners} learners</dd>
              </div>
              <div>
                <dt>Course rating</dt>
                <dd>{course.rating} / 5</dd>
              </div>
            </dl>
          </div>
          <div className="service-detail-rail-cta">
            <p>Need clarity on this course?</p>
            <span>
              We can help you understand its learning outcome and curriculum.
            </span>
            <a href="/contact">
              Ask a question <ArrowRight size={16} />
            </a>
          </div>
        </aside>
        <div className="service-detail-story">
          <figure className="service-detail-feature-image course-detail-feature-media">
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-label={`${course.title} preview`}
            >
              <source src={course.video} type="video/mp4" />
            </video>
          </figure>
          <article className="service-detail-story-copy">
            <p className="service-detail-kicker dark">
              <span /> Course overview
            </p>
            <h2>
              Learn with a<br />
              <em>real-world process.</em>
            </h2>
            <p>{course.description}</p>
            <p>
              {course.outcome} The programme uses examples, practice and
              reflection to turn each concept into a dependable part of your own
              market routine.
            </p>
          </article>
          <article className="service-detail-benefits course-detail-modules">
            <p className="service-detail-kicker dark">
              <span /> Course curriculum
            </p>
            <h2>
              From concepts
              <br />
              to <em>capability.</em>
            </h2>
            <p>
              Each module builds on the previous one, leaving room to practise
              before moving ahead.
            </p>
            <div className="course-module-grid">
              {course.modules.map((module, index) => (
                <article key={module.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{module.title}</h3>
                    <ul>
                      {module.lessons.map((lesson) => (
                        <li key={lesson}>
                          <Check size={15} />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>
      <section className="course-detail-method">
        <GraduationCap size={30} />
        <div>
          <p className="detail-kicker">
            <span /> How you will work
          </p>
          <h2>
            Observe. practise. <em>review.</em>
          </h2>
        </div>
        <p>
          Lessons are organised around examples, checklists and reflection. The
          aim is to help you form sound habits that outlast a single market
          setup.
        </p>
      </section>
    <PageCta
        title="Ready to build a stronger market process?"
        label="Ask about this course"
    />
    <ServicesFaq variant="course" />
    <SiteFooter />
    </main>
  );
}
