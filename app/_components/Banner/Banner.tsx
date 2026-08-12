'use client'

import { useState } from 'react'
import styles from './Banner.module.scss'
import Image from 'next/image'
import CloseIcon from '@/public/Banner/close.svg'

export default function Banner() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`${styles.main} ${!isOpen ? styles.closed : ''}`}>
      <h2 className={styles.title}>
        Sign up and get 15% off your first order.{' '}
        <a className={styles.link} href='/signup'>
          Sign Up Now
        </a>
      </h2>
      <button
        type='button'
        className={styles.closeButton}
        onClick={() => setIsOpen(false)}
        aria-label='Cerrar banner'
      >
        <Image src={CloseIcon} alt='Close' />
      </button>
    </div>
  )
}
