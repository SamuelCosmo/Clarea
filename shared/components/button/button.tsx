import styles from './button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: 'default' | 'secondary'
  active?: boolean
}

export default function Button({
  children,
  onClick,
  className = '',
  style = 'default',
  active = false,
}: ButtonProps) {
  const styleClass = style === 'default' ? styles.default : styles.secondary
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
