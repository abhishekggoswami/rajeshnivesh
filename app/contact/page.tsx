import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function ContactPage() {
  return <main className="contact-page"><section className="contact-hero"><SiteHeader active="Contact" /><div><p><span /> Get in touch</p><h1>Let’s solve the<br /><em>right problem first.</em></h1><p>Whether you need help understanding a service, choosing a course or finding the right disclosure, start with a clear conversation.</p></div></section>
  <section className="contact-content"><div className="contact-intro"><p className="detail-kicker"><span /> How we can help</p><h2>Start with what you need <em>clarity on.</em></h2><p>Tell us where you are stuck and we’ll point you toward the relevant research service, learning programme or investor-information resource.</p><div className="contact-methods"><a href="mailto:sharmaarajessh@gmail.com"><Mail size={20}/><span><b>Email us</b><small>sharmaarajessh@gmail.com</small></span><ArrowRight size={17}/></a><a href="tel:+918595587206"><Phone size={20}/><span><b>Call us</b><small>+91 85955 87206</small></span><ArrowRight size={17}/></a><div><MapPin size={20}/><span><b>Registered address</b><small>RZ 25A, 1st Floor, Indira Park Extension Part 1, Uttam Nagar, New Delhi 110059</small></span></div></div></div>
    <aside className="contact-paths"><MessageCircle size={25}/><h3>A helpful conversation starts with a useful question.</h3><ul><li>Need to understand the scope of a research service?</li><li>Choosing between two learning programmes?</li><li>Looking for investor disclosures or grievance support?</li><li>Want to suggest a future workshop topic?</li></ul><a href="mailto:sharmaarajessh@gmail.com?subject=Enquiry%20for%20Rajesh%20Nivesh">Write your question <ArrowRight size={16}/></a></aside></section>
  <section className="contact-compliance-note"><p><b>Investor support:</b> For formal grievance information and disclosure documents, please visit our <a href="/compliance">Compliance page</a>. Investments in securities are subject to market risks.</p></section>
  <SiteFooter /></main>;
}
