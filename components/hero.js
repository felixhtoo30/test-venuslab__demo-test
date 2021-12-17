import styles from './hero.module.css'

const Hero = () => {
  return (
    <section id="hero" className={`${styles.Hero} container`}>
      <p className={styles.Hero__TitleLight}>Idea to</p>
      <p className={styles.Hero__TitleBold}>Impact</p>
      <p className={styles.Hero__Tagline}>Risk-free mobile and web Development</p>
  </section>
  )
}

export default Hero
