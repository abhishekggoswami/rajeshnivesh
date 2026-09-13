import { ArrowRight, Check, Clock, GraduationCap } from 'lucide-react';
import { type Course } from '@/lib/course-data';
import { SiteHeader } from '@/components/site-header';
import { PageCta } from '@/components/page-cta';
import { SiteFooter } from '@/components/site-footer';

export function CourseDetail({ course }: { course: Course }) {
  return <main className="course-detail-page">
    <section className="course-detail-hero">
      <video autoPlay muted loop playsInline aria-hidden="true"><source src={course.video} type="video/mp4" /></video>
      <div className="course-detail-overlay" />
      <SiteHeader active="Learning" />
      <div className="course-detail-copy">
        <p><span /> {course.level} learning programme</p>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <a href="#curriculum">See the curriculum <ArrowRight size={17} /></a>
      </div>
      <div className="course-detail-meta"><Clock size={20} /><span><b>{course.duration}</b><small>Structured course time</small></span></div>
    </section>
    <section className="course-detail-intro">
      <div><p className="detail-kicker"><span /> Course outcome</p><h2>Learn with a<br /><em>real-world process.</em></h2></div>
      <p>{course.outcome} The course is built around active practice, market examples and a final project so each topic becomes part of a usable routine.</p>
    </section>
    <section id="curriculum" className="course-curriculum">
      <div className="course-curriculum-heading"><p className="detail-kicker"><span /> Curriculum</p><h2>From concepts<br />to <em>capability.</em></h2><p>Each module builds on the previous one, leaving room to apply what you learn before moving ahead.</p></div>
      <div className="module-list">{course.modules.map((module, index) => <article key={module.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{module.title}</h3><ul>{module.lessons.map((lesson) => <li key={lesson}><Check size={15} />{lesson}</li>)}</ul></div></article>)}</div>
    </section>
    <section className="course-detail-method"><GraduationCap size={30} /><div><p className="detail-kicker"><span /> How you will work</p><h2>Observe. practise. <em>review.</em></h2></div><p>Lessons are organised around examples, checklists and reflection. The aim is to help you form sound habits that outlast a single market setup.</p></section>
    <PageCta title="Ready to build a stronger market process?" label="Ask about this course" />
    <SiteFooter />
  </main>;
}
