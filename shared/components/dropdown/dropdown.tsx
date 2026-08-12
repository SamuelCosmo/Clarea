import Image from 'next/image'
import styles from './dropdown.module.scss'
import arrow from '@/public/arrow.svg'

interface DropdownProps {
  label: string
  options: { label: string; value: string }[]
  onSelect: (option: string) => void
}

export default function DropdownComponent({
  label,
  options,
  onSelect,
}: DropdownProps) {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton}>
        {label}{' '}
        <Image src={arrow} alt='Arrow' className={styles.dropdownArrow} />
      </button>
      <div className={styles.dropdownContent}>
        {options.map((option) => (
          <span
            key={option.value}
            className={styles.dropdownItem}
            onClick={() => {
              onSelect(option.value)
            }}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  )
}
