import Menu from '../Menu/Menu'
import styles from './Hero.module.scss'
import HeroGirl from '@/public/Hero/HeroGirl.webp'
import Button from '@/shared/components/button/button'

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
          <Button className='mt-[38px]'>Shop now</Button>
          <p className={styles.stars}>★★★★★  4.8 from 1,204 reviews</p>
        </div>
      </div>
    </div>
  )
}
