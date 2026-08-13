'use client'

import { useState } from 'react'
import styles from './Routine.module.scss'
import Image from 'next/image'
import Button from '@/shared/components/button/button'
import cleaner_1 from '@/public/Rountine/cleaner_1.png'
import cleaner_2 from '@/public/Rountine/cleaner_2.png'
import cleaner_3 from '@/public/Rountine/cleaner_3.png'
import heart from '@/public/Rountine/heart.svg'

interface Product {
  id: number
  name: string
  price: number
  image: any
  category: string
  discount?: number
}

type Category = 'all' | 'Cleansers' | 'Moisturizers' | 'Lotions'

const products: Product[] = [
  {
    id: 1,
    name: 'Gentle Cleanser',
    price: 11.99,
    image: cleaner_1,
    category: 'Cleansers',
    discount: 50,
  },
  {
    id: 2,
    name: 'Citrus Cleanser',
    price: 23.99,
    image: cleaner_2,
    category: 'Cleansers',
  },
  {
    id: 3,
    name: 'Foam Cleanser',
    price: 23.99,
    image: cleaner_3,
    category: 'Cleansers',
  },
  {
    id: 4,
    name: 'Hydrating Moisturizer',
    price: 34.99,
    image: cleaner_1,
    category: 'Moisturizers',
  },
  {
    id: 5,
    name: 'Rich Lotion',
    price: 29.99,
    image: cleaner_2,
    category: 'Lotions',
  },
  {
    id: 6,
    name: 'Luxury Lotion',
    price: 39.99,
    image: cleaner_3,
    category: 'Lotions',
  },
]

export default function Routine() {
  const [activeCategory, setActiveCategory] = useState<Category>('Cleansers')

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory,
  )

  const categories: Category[] = ['Cleansers', 'Moisturizers', 'Lotions']

  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Refresh, hydrate
          <br />& nourish
        </h2>
        <p className={styles.subtitle}>
          Three steps, one routine — built to work together.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.filters}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              style='secondary'
              active={category === activeCategory}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.badges}>
                <div className={styles.heart}>
                  <Image src={heart} alt='favorite' />
                </div>
                {product.discount && (
                  <div className={`${styles.discount}`}>
                    {product.discount}% Off
                  </div>
                )}
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={250}
                  className={styles.image}
                />
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <Button>Shop {activeCategory}</Button>
        </div>
      </div>
    </section>
  )
}
