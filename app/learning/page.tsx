import { ArrowRight, Clock, Star, Users } from 'lucide-react';
import { courses } from '@/lib/course-data';
import { SiteHeader } from '@/components/site-header';
import { PageCta } from '@/components/page-cta';
import { ServicesFaq } from '@/components/services-faq';
import { SiteFooter } from '@/components/site-footer';

export default function LearningPage() {
  return (
    <main className="learning-page">
      <section className="learning-page-hero">
        <video autoPlay muted loop playsInline aria-hidden="true">
          <source src="/landing-background.mp4" type="video/mp4" />
        </video>
        <div />
        <SiteHeader active="Learning" />
        <div>
          <p>
            <span /> Research-led learning
          </p>
          <h1>
            Learn the market.
            <br />
            <em>Build your process.</em>
          </h1>
          <p>
            Practical, structured courses for participants who want to
            understand how decisions are made—not simply what to trade.
          </p>
          <a href="#courses">
            Explore programmes <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section id="courses" className="course-directory">
        <div className="course-directory-heading">
          <div>
            <p className="orange-kicker"><b>*</b> Our solutions</p>
            <h2>
              Providing the best <strong>solutions</strong>
              <br />
              for your market journey.
            </h2>
          </div>
          <p>
            Each course has a distinct outcome and a syllabus designed around
            practice, reflection and completion.
          </p>
        </div>
        <div className="course-directory-grid">
          {courses.map((course, index) => (
            <article key={course.slug}>
              <div className="course-card-media">
                <video autoPlay muted loop playsInline aria-hidden="true">
                  <source src={course.video} type="video/mp4" />
                </video>
              </div>
              <div className="course-card-content">
                <span>
                  {String(index + 1).padStart(2, '0')} · {course.level}
                </span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-directory-meta">
                  <span>
                    <Clock size={14} />
                    {course.duration}
                  </span>
                  <span>
                    <Users size={14} />
                    {course.learners}
                  </span>
                  <span>
                    <Star size={14} />
                    {course.rating}
                  </span>
                </div>
                <a href={`/learning/${course.slug}`}>
                  View curriculum <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageCta title="Not sure where to begin? We can help you find the right course." />
      <ServicesFaq variant="learning" />
      <SiteFooter />
    </main>
  );
}
