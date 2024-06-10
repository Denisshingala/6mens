import React, { ReactNode } from 'react'
import styles from './SectionWrapper.module.css'

const SectionWrapper = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`${styles.sectionWrapper} ${className}`}>{children}</div>
  )
}

export default SectionWrapper