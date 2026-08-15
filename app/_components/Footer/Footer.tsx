import styles from './Footer.module.scss'
import Image from 'next/image'
import clarea_logo from '@/public/Footer/clarea_logo.svg'
import instagram from '@/public/Footer/instagram.svg'
import facebook from '@/public/Footer/facebook.svg'
import pinterest from '@/public/Footer/pinterest.svg'
import tiktok from '@/public/Footer/tiktok.svg'

import visa from '@/public/Footer/visa.png'
import mastercard from '@/public/Footer/mastercard.png'
import paypal from '@/public/Footer/paypal.png'
import apple from '@/public/Footer/apple-pay.png'
import google from '@/public/Footer/google-pay.png'
import Discount from './_components/Discount'

type ListProps = { title: string; options: string[] }

const list: ListProps[] = [
  {
    title: 'SHOP',
    options: ['Best Sellers', 'New Arrivals', 'Shop By Concern', 'Gift Cards'],
  },
  {
    title: 'COMPANY',
    options: ['Our Story', 'Ingredients', 'Sustainability', 'Careers'],
  },
  {
    title: 'SUPPORT',
    options: ['Contact Us', 'Shipping & Returns', 'FAQ', 'Track My Order'],
  },
  {
    title: 'LEGAL',
    options: ['Privacy Policy', 'Terms of Service', 'Accesibility'],
  },
]

export default function Footer() {
  return (
    <div className={styles.main}>
      <Discount />
      <div className={styles.body}>
        <div className={styles['social-container']}>
          <Image src={clarea_logo} alt={'logo'} className={styles.logo} />
          <span className={styles.description}>
            Clean, clinically-backed skincare — formulated with dermatologists,
            tested on real skin, never on animals.
          </span>
          <div className={styles.container}>
            <Image src={instagram} alt='instagram' className={styles.social} />
            <Image src={facebook} alt='facebook' className={styles.social} />
            <Image src={pinterest} alt='pinterest' className={styles.social} />
            <Image src={tiktok} alt='tiktok' className={styles.social} />
          </div>
        </div>
        {list.map((item: ListProps, index: number) => {
          return (
            <div className={styles.list}>
              <p className={styles.title}>{item.title}</p>
              {item.options.map((option: string, indexOption, number) => {
                return <div className={styles.options}>{option}</div>
              })}
            </div>
          )
        })}
      </div>
      <div className={styles.footer}>
        <div className={styles.rights}>
          Clarea.co © 2026, All Rights Reserved
        </div>
        <div className={styles.cards}>
          <Image src={visa} alt='visa' />
          <Image src={mastercard} alt='mastercard' />
          <Image src={paypal} alt='paypal' />
          <Image src={apple} alt='apple-pay' />
          <Image src={google} alt='google-pay' />
        </div>
      </div>
    </div>
  )
}
