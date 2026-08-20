import styles from './Reviews.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import type SwiperCore from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Card from './_components/Card'
import { useEffect, useRef } from 'react'
import arrowLeft from '@/public/Reviews/arrow-left.svg'
import arrowRight from '@/public/Reviews/arrow-right.svg'
import Image from 'next/image'

const testimonials = [
  {
    title: 'Sarah M.',
    description:
      '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."',
  },
  {
    title: 'Alex K.',
    description:
      '"Finally a routine that doesn\'t irritate my skin. The cleanser is so gentle."',
  },
  {
    title: 'James L.',
    description:
      '"Ingredient list actually makes sense to me. That sold me before the results did."',
  },
]

// Repeated so enough real slides exist to satisfy Swiper's loop buffer
// at the widest breakpoint (slidesPerView 3.3); fewer slides than that
// makes loop mode pad the gap with blank slides.
const slides = [...testimonials, ...testimonials, ...testimonials]

export default function Reviews() {
  const swiperRef = useRef<SwiperCore | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.update()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3 className={styles.title}>What people are saying</h3>
        <div className={styles.buttons}>
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <Image src={arrowLeft} alt='previous' />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <Image src={arrowRight} alt='next' />
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <Swiper
          spaceBetween={16}
          slidesPerView={1.15}
          centeredSlides={true}
          loop={true}
          observer={true}
          observeParents={true}
          observeSlideChildren={true}
          pagination={false}
          navigation={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            521: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3.3,
              spaceBetween: 24,
            },
          }}
        >
          {slides.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                title={testimonial.title}
                description={testimonial.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
