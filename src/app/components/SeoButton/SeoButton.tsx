"use client"
import React from 'react'
import styles from './SeoButton.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const SeoButton = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 1,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
            }}
            className={styles.seoButtonWrapper}>
            <img src="/img/SEO-services.png" height={200} width={200} alt='seo-button' className={styles.seoButtonImg} />
            <FontAwesomeIcon icon={faArrowDown} className={styles.downArrow} />
        </motion.div>
    )
}

export default SeoButton