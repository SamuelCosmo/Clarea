'use client'
import Image from 'next/image'
import Hero from './_components/Hero/Hero'
import Banner from './_components/Banner/Banner'
import Features from './_components/Features/Features'
import Routine from './_components/Routine/Routine'

export default function Home() {
  return (
    <main className='flex flex-1 w-full flex-col items-center bg-white dark:bg-black sm:items-start'>
      <Banner />
      <Hero />
      <Features />
      <Routine />
    </main>
  )
}
