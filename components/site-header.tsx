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
      <img src="/rajesh-nivesh-brandmark.png" alt="Rajesh Nivesh" />
    </a>
    <nav className="inner-page-nav" aria-label="Main navigation">
      {links.map(([label, href]) => <a key={label} href={href} aria-current={active === label ? 'page' : undefined}>{label}</a>)}
    </nav>
    <a className="inner-page-contact" href="/contact">Get in touch <ArrowRight size={16} /></a>
    <button className="inner-page-menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="inner-page-mobile-nav" aria-label="Mobile navigation">
      <a className="mobile-menu-brand" href="/" aria-label="Rajesh Nivesh home" onClick={() => setOpen(false)}>
        <img src="/rajesh-nivesh-brandmark.png" alt="Rajesh Nivesh" />
      </a>
      <span className="mobile-menu-rn" aria-hidden="true">RN</span>
      <div className="mobile-menu-links">
        {links.map(([label, href]) => <a key={label} href={href} aria-current={active === label ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
    </nav>}
  </header>;
}
