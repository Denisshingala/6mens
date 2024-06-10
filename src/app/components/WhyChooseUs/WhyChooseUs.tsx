"use client"

import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './WhyChooseUs.module.css'
import { whyChooseUsData } from './whyChooseUsData'
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const sectionHeading = (
        <p className={styles.subHeading}>
            Choose us for unparalleled <b>expertise</b> and <b>tailored</b> solutions, ensuring your IT needs are met with <b>precision</b> and <b>innovation</b>.
        </p>
    )

    return (
        <>
            <SectionTitle heading="Why Choose Us?" subHeading={sectionHeading} />
            <div className={styles.cardContainer}>
                {
                    whyChooseUsData.map((whyChooseUsData, index) => {
                        return (
                            <motion.div
                                initial={{ y: (Number(index) % 2 != 0 ? 100 : -100), opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    y: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 0.2 },
                                    ease: "easeInOut",
                                }}
                                className={styles.card}
                                key={index}>
                                <div className={styles.innerCard}>
                                    <div className={`${styles.cardFace} ${styles.front}`}>
                                        <img src={whyChooseUsData?.img?.url} alt={whyChooseUsData?.img?.alt} className='img-fluid my-3' />
                                        <h3 className={styles.title}>{whyChooseUsData?.title}</h3>
                                    </div>
                                    <div className={`${styles.cardFace} ${styles.back}`}>
                                        <p className={`${styles.description} p-3 `}>{whyChooseUsData?.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default WhyChooseUs