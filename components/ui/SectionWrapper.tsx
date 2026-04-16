'use client'

import React, { CSSProperties } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale'
  delay?: number
  threshold?: number
  className?: string
  style?: CSSProperties
  as?: keyof JSX.IntrinsicElements
}

export function SectionWrapper({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1, // Note: margin used instead for viewports in framer-motion
  className = '',
  style,
  as: Tag = 'div',
}: SectionWrapperProps) {
  
  const variants = {
    'fade-up': { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } },
    'fade-down': { hidden: { opacity: 0, y: -36 }, visible: { opacity: 1, y: 0 } },
    'fade-left': { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } },
    'fade-right': { hidden: { opacity: 0, x: 36 }, visible: { opacity: 1, x: 0 } },
    'scale': { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  }

  // Safely cast Tag to a framer-motion component
  const MotionTag = (motion as any)[Tag as string] || motion.div;
  const delayInSeconds = delay > 0 ? delay / 1000 : 0;

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold > 0 ? threshold : 0.1, margin: '-20px' }}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1], // Custom spring-like easing
        delay: delayInSeconds 
      }}
      variants={variants[animation]}
    >
      {children}
    </MotionTag>
  )
}
