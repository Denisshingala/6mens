"use client"

import React from 'react'
import styles from './AboutContainer.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutContainer = ({ img, heading, content, className = "container", index = 0 }: any) => {
    return (
        <motion.div
            initial={{ x: (index % 2 ? -100 : 100), opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.1,
                x: { type: "spring", stiffness: 60 },
                ease: "easeInOut",
                duration: 0.6
            }}
            className={className}>
            <div className={styles.aboutContainer}>
                <div className={`${styles.aboutContent} p-5`}>
                    <img src={img?.src} height={100} width={100} className={`${styles.aboutImg} img-fluid`} alt={img?.alt} />
                    <div className={`${styles.aboutHeading} py-4`}>
                        <h2 className={styles.aboutHeadingText}>{heading}</h2>
                    </div>
                    <div className={styles.aboutSubHeading}>
                        <h5 className={styles.aboutSubHeadingText}>
                            {content}
                        </h5>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default AboutContainer