import styles from './Card.module.scss'
import Image from 'next/image'
import star from '@/public/star.svg'

interface Props {
  title: string
  description: string
}

export default function Card({ title, description }: Props) {
  return (
    <div className={styles.main}>
      <div className={styles.stars}>
        <Image src={star} alt='star' />
        <Image src={star} alt='star' />
        <Image src={star} alt='star' />
        <Image src={star} alt='star' />
        <Image src={star} alt='star' />
      </div>

      <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  )
}
