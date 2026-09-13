import { notFound } from 'next/navigation';
import { CourseDetail } from '@/components/course-detail';
import { courses, getCourse } from '@/lib/course-data';

export function generateStaticParams() { return courses.map(({ slug }) => ({ slug })); }

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  return <CourseDetail course={course} />;
}
