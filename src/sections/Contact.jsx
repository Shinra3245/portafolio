import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Smartphone,
  Settings,
  ShieldCheck,
  Server,
  Database,
  Award,
  MessageCircle,
  Mail,
} from 'lucide-react'
import { useToast } from '../hooks/useToast'
import Toast from '../components/Toast'
import SocialButton from '../components/SocialButton'
import facebookIcon from '../assets/icons/socials/facebook-icon.svg'
import instagramIcon from '../assets/icons/socials/instagram-icon.svg'
import whatsappIcon from '../assets/icons/socials/whatsapp-icon.svg'
import linkedinIcon from '../assets/icons/socials/linkedin.svg'
import githubIcon from '../assets/icons/socials/github_dark.svg'
import gmailIcon from '../assets/icons/socials/gmail.svg'
import Lottie from 'lottie-react'
import webDesignLottie from '../assets/icons/web-design.json'
import globalConfigLottie from '../assets/icons/global-configuration.json'
import pythonLottie from '../assets/icons/python-logo.json'
import mobileLottie from '../assets/icons/iphone.json'
import securityLottie from '../assets/icons/security-status.json'
import dataLottie from '../assets/icons/graph-lottie.json'
import trophyLottie from '../assets/icons/trophy.json'
import TarsAnimation from '../components/TarsAnimation'
import './Contact.css'

const SOCIALS = [
  {
    href: 'https://www.facebook.com/share/19Jt6HQKa8/',
    icon: facebookIcon,
    label: 'Facebook',
    sublabel: 'Omar Bolaños',
    color: '#0866ff',
  },
  {
    href: 'https://www.instagram.com/g_omaar._.32?igsh=MTltMTJhN3ZxMmR4cw==',
    icon: instagramIcon,
    label: 'Instagram',
    sublabel: '@g_omaar._.32',
    color: '#e6683c',
  },
  {
    href: 'https://wa.me/524131060699',
    icon: whatsappIcon,
    label: 'WhatsApp',
    sublabel: '+52 413 106 0699',
    color: '#25d366',
  },
  {
    href: 'https://www.linkedin.com/in/omar-gadiel-bolaños-garcía-1a4154359/',
    icon: linkedinIcon,
    label: 'LinkedIn',
    sublabel: 'Omar Bolaños',
    color: '#0a66c2',
  },
  {
    href: 'https://github.com/Shinra3245',
    icon: githubIcon,
    label: 'GitHub',
    sublabel: '@Shinra3245',
    color: '#e2e8f0',
  },
  {
    href: 'mailto:omarbolanos198@gmail.com',
    icon: gmailIcon,
    label: 'Gmail',
    sublabel: 'omarbolanos198@gmail.com',
    color: '#ea4335',
    external: false,
  },
]

const SERVICE_ITEMS = [
  { key: 'serviceResponsive', animationData: webDesignLottie },
  { key: 'serviceAdmin', animationData: globalConfigLottie },
  { key: 'servicePython', animationData: pythonLottie },
  { key: 'serviceMobile', animationData: mobileLottie },
  { key: 'serviceSecurity', animationData: securityLottie },
  { key: 'serviceData', animationData: dataLottie },
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
          <div className="card__border"></div>
          <h3 className="contact__heading">{t('contact.connectTitle')}</h3>
          <h4 className="contact__subheading">{t('contact.followMeTitle')}</h4>
          <div className="contact__socials">
            {SOCIALS.map((social) => (
              <SocialButton key={social.label} {...social} />
            ))}
          </div>
          <div className="contact__status">
            <strong>{t('contact.statusTitle')}</strong>
          </div>
          <TarsAnimation />
        </div>

        <div className="contact__card card">
          <div className="card__border"></div>
          <h3 className="contact__heading">{t('contact.servicesTitle')}</h3>
          <ul className="contact__services">
            {SERVICE_ITEMS.map(({ key, Icon, animationData }) => (
              <li key={key}>
                {animationData ? (
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    className="contact__service-gif"
                  />
                ) : (
                  <Icon size={42} />
                )}
                <span>{t(`contact.${key}`)}</span>
              </li>
            ))}
          </ul>

          <div className="contact__guarantee">
            <Lottie
              animationData={trophyLottie}
              loop={true}
              className="contact__service-gif"
              style={{ width: '42px', height: '42px' }}
            />
            <div>
              <strong>{t('contact.guaranteeTitle')}</strong>
              <p>{t('contact.guaranteeText')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glitch-form-wrapper">
        <form className="glitch-card" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />

          <div className="card-header">
            <div className="card-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path
                  d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                ></path>
                <path
                  d="M12 11.5a3 3 0 0 0 -3 2.824v1.176a3 3 0 0 0 6 0v-1.176a3 3 0 0 0 -3 -2.824z"
                ></path>
              </svg>
              <span>SECURE_MESSAGE</span>
            </div>

            <div className="card-dots"><span></span><span></span><span></span></div>
          </div>

          <div className="card-body">
            <div className="contact__form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder=" "
                />
                <label htmlFor="name" className="form-label" data-text={t('contact.form.name')}>
                  {t('contact.form.name')}
                </label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                />
                <label htmlFor="email" className="form-label" data-text={t('contact.form.email')}>
                  {t('contact.form.email')}
                </label>
              </div>
            </div>

            <div className="form-group">
              <textarea
                id="project"
                name="project"
                rows={4}
                required
                placeholder=" "
              />
              <label htmlFor="project" className="form-label" data-text={t('contact.form.project')}>
                {t('contact.form.project')}
              </label>
              <small className="form-helper">{t('contact.form.projectHelper')}</small>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder=" "
              />
              <label htmlFor="message" className="form-label" data-text={t('contact.form.message')}>
                {t('contact.form.message')}
              </label>
            </div>

            <button
              data-text={sending ? t('contact.form.sending') : t('contact.form.send')}
              type="submit"
              className="submit-btn"
              disabled={sending}
            >
              <span className="btn-text">
                {sending ? t('contact.form.sending') : t('contact.form.send')}
              </span>
            </button>
          </div>
        </form>
      </div>

      <Toast toast={toast} />
    </section>
  )
}

export default Contact
