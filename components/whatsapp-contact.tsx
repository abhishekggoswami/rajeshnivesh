import { MessageCircle, Send } from 'lucide-react';

export function WhatsAppContact() {
  return (
    <div className="contact-quick-actions">
      <a
        className="telegram-contact"
        href="https://t.me/rajesh_sayss5"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Rajesh Nivesh on Telegram"
      >
        <Send aria-hidden="true" size={20} strokeWidth={2.35} />
        <span>Telegram</span>
      </a>
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
    </div>
  );
}
