"use client";

import React, { ReactNode, isValidElement } from 'react'
import styles from './SectionTitle.module.css';
import { motion } from 'framer-motion';

type SectionTitleType = {
    heading?: ReactNode | string;
    subHeading?: ReactNode | string;
    className?: string;
}

const SectionTitle = ({ heading = '', subHeading = '', className = '' }: SectionTitleType) => {
    return (
        <>
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
                className={`${styles.sectionTitleWrapper} ${className} mt-5`}>
                {isValidElement(heading) ? heading : <h2 className={styles.heading}>{heading}</h2>}
                {isValidElement(subHeading) ? subHeading : <p className={styles.subHeading}>{subHeading}</p>}
            </motion.div>
        </>
    )
}

export default SectionTitle
