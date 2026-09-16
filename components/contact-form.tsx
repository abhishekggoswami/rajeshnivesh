'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { type SyntheticEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const getValue = (field: string) => {
      const value = form.get(field);
      return typeof value === 'string' ? value : '';
    };
    const name = getValue('name');
    const email = getValue('email');
    const phone = getValue('phone');
    const subject = getValue('subject');
    const message = getValue('message');
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      'Message:',
      message,
    ].join('\n');

    setStatus('Opening your email app with this enquiry filled in.');
    window.location.href = `mailto:sharmaarajessh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <MessageCircle size={23} />
        <div>
          <p>Send an enquiry</p>
          <h3>Tell us how we can help.</h3>
        </div>
      </div>
      <div className="contact-form-fields">
        <label>
          Full name <span>*</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email address <span>*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone number <span>*</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Subject <span>*</span>
          <input name="subject" type="text" required />
        </label>
        <label className="contact-form-message">
          Your message <span>*</span>
          <textarea name="message" rows={5} required />
        </label>
      </div>
      <button type="submit">
        Send enquiry <ArrowRight size={17} />
      </button>
      <output className="contact-form-status" aria-live="polite">
        {status}
      </output>
    </form>
  );
}
