import { MessageCircle } from 'lucide-react';

export function WhatsAppContact() {
  return (
    <a
      className="whatsapp-contact"
      href="https://wa.link/lxaulj"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Rajesh Nivesh on WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={21} strokeWidth={2.35} />
      <span>WhatsApp</span>
    </a>
  );
}
