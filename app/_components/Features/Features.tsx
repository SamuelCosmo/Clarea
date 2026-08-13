'use client'

import styles from './Features.module.scss'
import Image from 'next/image'

export default function Features() {
  const features = [
    {
      id: 1,
      icon: '/Features/leaf.svg',
      title: 'Natural Formula',
      description:
        'Plant-derived actives, nothing synthetic hiding in the mix.'
    },
    {
      id: 2,
      icon: '/Features/donate.svg',
      title: 'Cruelty Free',
      description: 'Never tested on animals — certified, not just claimed.'
    },
    {
      id: 3,
      icon: '/Features/twitter.svg',
      title: 'Expert Approved',
      description:
        'Developed with dermatologists, tested on real skin.'
    },
    {
      id: 4,
      icon: '/Features/delivery-truck.svg',
      title: 'Free Shipping',
      description: 'On every order over $40, no code needed.'
    }
  ]

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <Image
              src={feature.icon}
              alt={feature.title}
              width={40}
              height={40}
              className={styles.icon}
            />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
