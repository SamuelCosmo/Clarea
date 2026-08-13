import styles from './Shop.module.scss'
import Image from 'next/image'
import skin from '@/public/Shop/skin.png'
import arrow from '@/public/Shop/arrow-right.svg'
import Button from '@/shared/components/button/button'

export default function Shop() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <Image src={skin} alt='skincare' />
        <div className={styles['information-container']}>
          <div className={styles.container}>
            <h3 className={styles.title}>
              <b>Clinically proven,</b> advanced formulas — all natural, for
              your skin.
            </h3>
            <p className={styles.description}>
              94% of users saw visibly clearer skin in 4 weeks, in an
              independent 8-week study.
            </p>
            <div className={styles['button-container']}>
              <Button
                className='flex justify-center align-center'
                style='blue-outline'
              >
                Shop best sellers{' '}
                <Image src={arrow} alt={arrow} className='ml-[8px]' />
              </Button>
              <span className={styles.stars}>★★★★★ 4.8 from 1,204 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
