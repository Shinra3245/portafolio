import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Smartphone,
  Settings,
  ShieldCheck,
  FileText,
  Wand2,
  Plug,
  Award,
  MessageCircle,
  Mail,
} from 'lucide-react'
import { useToast } from '../hooks/useToast'
import Toast from '../components/Toast'
import facebookIcon from '../assets/images/socials/facebook.png'
import instagramIcon from '../assets/images/socials/instagram.png'
import whatsappIcon from '../assets/images/socials/whatsapp.png'
import linkedinIcon from '../assets/images/socials/linkedin.png'
import './Contact.css'

const SOCIALS = [
  { href: 'https://www.facebook.com/share/19Jt6HQKa8/', icon: facebookIcon, label: 'Facebook' },
  { href: 'https://www.instagram.com/g_omaar._.32?igsh=MTltMTJhN3ZxMmR4cw==', icon: instagramIcon, label: 'Instagram' },
  { href: 'https://wa.me/524131060699', icon: whatsappIcon, label: 'WhatsApp' },
  { href: 'https://www.linkedin.com/in/omar-gadiel-bolaños-garcía-1a4154359/', icon: linkedinIcon, label: 'LinkedIn' },
]

const SERVICE_ITEMS = [
  { key: 'serviceResponsive', Icon: Smartphone },
  { key: 'serviceAdmin', Icon: Settings },
  { key: 'serviceAuth', Icon: ShieldCheck },
  { key: 'serviceReports', Icon: FileText },
  { key: 'serviceAnimations', Icon: Wand2 },
  { key: 'serviceApis', Icon: Plug },
]

function Contact() {
  const { t } = useTranslation()
  const { toast, showToast } = useToast()
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formsubmit.co/ajax/omarbolanos198@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('request failed')
      showToast(t('contact.form.success'), 'success')
      form.reset()
    } catch {
      showToast(t('contact.form.error'), 'error')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact__grid">
        <div className="contact__card card">
          <h3 className="contact__heading">{t('contact.connectTitle')}</h3>
          <h4 className="contact__subheading">{t('contact.followMeTitle')}</h4>
          <div className="contact__socials">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <img src={social.icon} alt={social.label} />
              </a>
            ))}
          </div>
          <div className="contact__status">
            <strong>{t('contact.statusTitle')}</strong>
            <span className="contact__status-badge">{t('contact.statusText')}</span>
          </div>
        </div>

        <div className="contact__card card">
          <h3 className="contact__heading">{t('contact.readyTitle')}</h3>
          <p className="contact__lead">{t('contact.readySubtitle')}</p>

          <div className="contact__method">
            <MessageCircle size={22} />
            <div>
              <strong>{t('contact.whatsappTitle')}</strong>
              <a href="https://wa.me/524131060699">+52 413 106 0699</a>
            </div>
          </div>

          <div className="contact__method">
            <Mail size={22} />
            <div>
              <strong>{t('contact.emailTitle')}</strong>
              <a href="mailto:omarbolanos198@gmail.com">omarbolanos198@gmail.com</a>
              <small>{t('contact.emailSubtitle')}</small>
            </div>
          </div>
        </div>

        <div className="contact__card card">
          <h3 className="contact__heading">{t('contact.servicesTitle')}</h3>
          <ul className="contact__services">
            {SERVICE_ITEMS.map(({ key, Icon }) => (
              <li key={key}>
                <Icon size={20} />
                <span>{t(`contact.${key}`)}</span>
              </li>
            ))}
          </ul>

          <div className="contact__guarantee">
            <Award size={20} />
            <div>
              <strong>{t('contact.guaranteeTitle')}</strong>
              <p>{t('contact.guaranteeText')}</p>
            </div>
          </div>
        </div>
      </div>

      <form className="contact__form card" onSubmit={handleSubmit}>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />

        <div className="contact__form-row">
          <div className="contact__field">
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="contact__field">
            <label htmlFor="email">{t('contact.form.email')}</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <div className="contact__field">
          <label htmlFor="message">{t('contact.form.message')}</label>
          <textarea id="message" name="message" rows={5} required />
        </div>

        <button type="submit" className="btn btn--primary" disabled={sending}>
          {sending ? t('contact.form.sending') : t('contact.form.send')}
        </button>
      </form>

      <Toast toast={toast} />
    </section>
  )
}

export default Contact
