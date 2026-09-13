'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Learning', '/learning'],
  ['Compliance', '/compliance'], ['Workshops', '/workshops'], ['Contact', '/contact'],
] as const;

export function SiteHeader({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return <header className="inner-page-header">
    <a className="inner-page-brand" href="/" aria-label="Rajesh Nivesh home">
      <img src="/rajesh-nivesh-logo.png" alt="Rajesh Nivesh" />
    </a>
    <nav className="inner-page-nav" aria-label="Main navigation">
      {links.map(([label, href]) => <a key={label} href={href} aria-current={active === label ? 'page' : undefined}>{label}</a>)}
    </nav>
    <a className="inner-page-contact" href="/contact">Get in touch <ArrowRight size={16} /></a>
    <button className="inner-page-menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="inner-page-mobile-nav" aria-label="Mobile navigation">
      {links.map(([label, href]) => <a key={label} href={href} aria-current={active === label ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      <a href="/contact" onClick={() => setOpen(false)}>Get in touch <ArrowRight size={16} /></a>
    </nav>}
  </header>;
}
