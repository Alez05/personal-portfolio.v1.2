import styles from './hero.module.css'
import { HeroType } from './hero.type'

const Hero = ({ title, subtitle, description, image,location, children }: HeroType) => {
  return (
    <section className={styles.hero}>
      {image?.src && (
        <img
          src={image.src}
          alt={image.alt || 'hero image'}
          className={styles.heroImage}
        />
      )}

      <div className={styles.overlay}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        {location && <span className={styles.location}><i className="fa-solid fa-location-dot"></i> {location}</span>}
        {description && <p className={styles.description}>{description}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  )
}

export { Hero }
