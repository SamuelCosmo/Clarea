'use client'
import styles from './page.module.scss'
import Hero from './_components/Hero/Hero'
import Banner from './_components/Banner/Banner'
import Features from './_components/Features/Features'
import Routine from './_components/Routine/Routine'
import Shop from './_components/Shop/Shop'
import Reviews from './_components/Reviews/Reviews'
import Footer from './_components/Footer/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <main className={'flex flex-1 w-full flex-col items-center sm:items-start'}>
      <Banner />
      <Hero />
      <Features />
      <Routine />
      <div className={styles.container}>
        <Shop />
        <Reviews />
        <Footer />
      </div>
    </main>
  )
}
