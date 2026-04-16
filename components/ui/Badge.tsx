import React from 'react'
import styles from './Badge.module.css'

interface BadgeProps {
  variant?: 'default' | 'success' | 'surface'
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
