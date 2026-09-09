import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rajesh Nivesh | Research. Clarity. Discipline.',
  description: 'Research, market education and risk-aware perspectives for serious Indian market participants.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
