import styles from './button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: 'default' | 'secondary' | 'blue-outline'
  active?: boolean
}

export default function Button({
  children,
  onClick,
  className = '',
  style = 'default',
  active = false,
}: ButtonProps) {
  const styleMap = {
    default: styles.default,
    secondary: styles.secondary,
    'blue-outline': styles['blue-outline'],
  }

  const styleClass = styleMap[style]
  const activeClass = active && style === 'secondary' ? styles.active : ''

  return (
    <button
      className={`${styleClass} ${activeClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
