import Button from '@/shared/components/button/button'
import styles from './Discount.module.scss'
import { useState } from 'react'
import emailIcon from '@/public/mail.svg'
import Image from 'next/image'

export default function Discount() {
  const [email, setEmail] = useState('')

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p className={styles.discount}>Get 15% OFF your first order</p>
        <p className={styles.description}>
          Sign up for skincare tips, early access to new formulas, and a welcome
          discount.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles['input-container']}>
          <input
            name='email'
            className={styles.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email.length === 0 && (
            <span className={styles.placeholder}>
              <Image src={emailIcon} alt='email' width={24} height={24} /> Enter
              your email address
            </span>
          )}
        </div>
        <Button className={styles.button}>Get my Discount</Button>
      </div>
    </div>
  )
}
