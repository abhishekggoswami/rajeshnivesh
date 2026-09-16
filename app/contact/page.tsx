import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PageFeatureStrip } from '@/components/page-feature-strip';
import { ServicesFaq } from '@/components/services-faq';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <video autoPlay muted loop playsInline aria-hidden="true">
          <source src="/landing-background.mp4" type="video/mp4" />
        </video>
        <div className="contact-hero-overlay" />
        <SiteHeader active="Contact" />
        <div>
          <p>
            <span /> Get in touch
          </p>
          <h1>
            Let’s solve the
            <br />
            <em>right problem first.</em>
          </h1>
          <p>
            Whether you need help understanding a service, choosing a course or
            finding the right disclosure, start with a clear conversation.
          </p>
          <a className="inner-hero-action" href="mailto:sharmaarajessh@gmail.com">
            Email Rajesh <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="contact-content">
        <div className="contact-intro">
          <p className="detail-kicker">
            <span /> How we can help
          </p>
          <h2>
            Start with what you need <em>clarity on.</em>
          </h2>
          <p>
            Tell us where you are stuck and we’ll point you toward the relevant
            research service, learning programme or investor-information
            resource.
          </p>
          <div className="contact-methods">
            <a href="mailto:sharmaarajessh@gmail.com">
              <Mail size={20} />
              <span>
                <b>Email us</b>
                <small>sharmaarajessh@gmail.com</small>
              </span>
              <ArrowRight size={17} />
            </a>
            <a href="tel:+918595587206">
              <Phone size={20} />
              <span>
                <b>Call us</b>
                <small>+91 85955 87206</small>
              </span>
              <ArrowRight size={17} />
            </a>
            <div>
              <MapPin size={20} />
              <span>
                <b>Registered address</b>
                <small>
                  RZ 25A, 1st Floor, Indira Park Extension Part 1, Uttam Nagar,
                  New Delhi 110059
                </small>
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
      <PageFeatureStrip title="Find the right research or learning support for your question." />
      <section className="contact-compliance-note">
        <p>
          <b>Investor support:</b> For formal grievance information and
          disclosure documents, please visit our{' '}
            <Link href="/compliance">Compliance page</Link>. Investments in securities
          are subject to market risks.
        </p>
      </section>
      <ServicesFaq variant="contact" />
      <SiteFooter />
    </main>
  );
}
