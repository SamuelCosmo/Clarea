import styles from './Reviews.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import type SwiperCore from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
//import './CustomSwiper.scss'
import Card from './_components/Card'
import { useEffect, useRef } from 'react'
import arrowLeft from '@/public/Reviews/arrow-left.svg'
import arrowRight from '@/public/Reviews/arrow-right.svg'
import Image from 'next/image'

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
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          observer={true}
          observeParents={true}
          observeSlideChildren={true}
          pagination={false}
          navigation={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          freeMode={{
            enabled: true,
            sticky: true,
            momentum: true,
          }}
          breakpoints={{
            520: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
              freeMode: { enabled: false },
            },
          }}
        >
          <SwiperSlide>
            <Card
              title={'Sarah M.'}
              description={
                '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={'Alex K.'}
              description={
                '"Finally a routine that doesn\'t irritate my skin. The cleanser is so gentle."'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={'James L.'}
              description={
                '\"Ingredient list actually makes sense to me. That sold me before the results did.\"'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={'Sarah M.'}
              description={
                '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={'Alex K.'}
              description={
                '"Finally a routine that doesn\'t irritate my skin. The cleanser is so gentle."'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={'James L.'}
              description={
                '\"Ingredient list actually makes sense to me. That sold me before the results did.\"'
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
