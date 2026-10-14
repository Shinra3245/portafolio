import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './ImageGallery.css'

export default function ImageGallery({ images, variant = 'project' }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'es'
  const [selected, setSelected] = useState(0)
  const active = images[selected] || images[0]

  return (
    <figure className={`image-gallery image-gallery--${variant}`}>
      <a
        className="image-gallery__viewport"
        href={active.src}
        target="_blank"
        rel="noreferrer"
        aria-label={t('gallery.openImage', { caption: active[lang] })}
      >
        <img src={active.src} alt={active[lang]} loading="lazy" decoding="async" />
      </a>
      {images.length > 1 && (
        <div className="image-gallery__thumbnails" role="group" aria-label={t('gallery.images')}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-pressed={index === selected}
              aria-label={t('gallery.selectImage', { index: index + 1, caption: image[lang] })}
              onClick={() => setSelected(index)}
            >
              <img src={image.src} alt="" loading="lazy" decoding="async" width="68" height="44" />
            </button>
          ))}
        </div>
      )}
      <figcaption>{active[lang]}</figcaption>
    </figure>
  )
}
