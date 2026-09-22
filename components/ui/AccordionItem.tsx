'use client'

import React, { useState } from 'react'
import styles from './AccordionItem.module.css'

export interface AccordionItemProps {
  // Pattern 1: Controlled with title/children
  title?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClick?: () => void

  // Pattern 2: Self-contained with question/answer
  question?: string
  answer?: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({
  title,
  children,
  isOpen: controlledIsOpen,
  onClick,
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)

  const isControlled = controlledIsOpen !== undefined
  const open = isControlled ? controlledIsOpen : internalOpen

  const handleToggle = () => {
    if (onClick) {
      onClick()
    }
    if (!isControlled) {
      setInternalOpen(!internalOpen)
    }
  }

  const headingText = title || question || ''
  const contentBody = children !== undefined ? children : answer

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.trigger}
        onClick={handleToggle}
        aria-expanded={open}
      >
        <span>{headingText}</span>
        <svg
          className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`${styles.content} ${open ? styles.contentOpen : ''}`}>
        <div className={styles.contentInner}>{contentBody}</div>
      </div>
    </div>
  )
}

