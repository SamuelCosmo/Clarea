import styles from './Menu.module.scss'
import Image from 'next/image'
import menu from '@/public/Hero/Menu/menu.svg'
import logo from '@/public/Hero/Menu/clarea_logo.svg'
import logo_mobile from '@/public/Hero/Menu/logo_mobile.svg'
import heart from '@/public/Hero/Menu/heart.svg'
import cart from '@/public/Hero/Menu/cart.svg'
import user from '@/public/Hero/Menu/user.svg'
import DropdownComponent from '@/shared/components/dropdown/dropdown'

export default function Menu() {
  return (
    <div className={styles.main}>
      <Image
        src={logo}
        alt='Clarea Logo'
        className={styles.logo + ' ' + styles['hide-mobile']}
      />
      <Image
        src={menu}
        alt='Menu'
        className={styles.menu + ' ' + styles['hide-desktop']}
      />
      <Image
        src={logo_mobile}
        alt='Clarea Logo'
        className={styles.logo + ' ' + styles['hide-desktop']}
      />
      <div className={styles.menuItems}>
        <DropdownComponent
          label='Shop'
          options={[]}
          onSelect={(option) => {
            console.log(`Selected option: ${option}`)
          }}
        />
        <a href='#' className={styles.menuItem}>
          On Sale
        </a>
        <a href='#' className={styles.menuItem}>
          New Arrivals
        </a>
        <a href='#' className={styles.menuItem}>
          Collections
        </a>
      </div>
      <div className={styles.menuActions}>
        <button className={styles.action}>
          <Image src={heart} alt='Heart' />
        </button>
        <button className={styles.action}>
          <Image src={cart} alt='Cart' />
        </button>
        <button className={styles.action}>
          <Image src={user} alt='User' />
        </button>
      </div>
    </div>
  )
}
