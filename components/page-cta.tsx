import { ArrowRight } from 'lucide-react';

export function PageCta({ title = 'Let’s bring more clarity to your market process.', href = '/contact', label = 'Talk to us' }: { title?: string; href?: string; label?: string }) {
  return <section className="page-cta">
    <p><span /> Start with clarity</p>
    <h2>{title}</h2>
    <a href={href}>{label} <ArrowRight size={18} /></a>
  </section>;
}
