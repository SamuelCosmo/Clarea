import Menu from '../Menu/Menu'
import styles from './Hero.module.scss'
import HeroGirl from '@/public/Hero/HeroGirl.webp'

export default function Hero() {
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.frameContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <b>Clearer skin,</b>
            <br /> in plain light.
          </h1>
          <p className={styles.description}>
            No filters, no fine print — just dermatologist-tested formulas with
            the ingredient list to back it up.
          </p>
          <button className={styles.button}>Shop now</button>
          <p className={styles.stars}>★★★★★  4.8 from 1,204 reviews</p>
        </div>
      </div>
    </div>
  )
}
