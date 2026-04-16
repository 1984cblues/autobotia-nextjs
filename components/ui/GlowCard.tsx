'use client'

import React from 'react'
import Link from 'next/link'
import styles from './GlowCard.module.css'

interface GlowCardProps {
  icon?: React.ReactNode
  title?: string
  description?: string
  href?: string
  linkText?: string
  compact?: boolean
  feature?: boolean
  children?: React.ReactNode
  className?: string
}

export function GlowCard({
  icon,
  title,
  description,
  href,
  linkText = 'Saiba mais',
  compact = false,
  feature = false,
  children,
  className = '',
}: GlowCardProps) {
  const classes = [
    styles.card,
    compact ? styles.compact : '',
    feature ? styles.feature : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <article className={classes} onMouseMove={handleMouseMove}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
      {href && (
        <Link href={href} className={styles.link}>
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </article>
  )
}
