"use client"
import React from 'react'
import styles from './ServiceCard.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';

const ServiceCard = ({ img, title = "", description = "", className = "", indexKey = 0 }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.1 ,
                ease: "easeInOut",
            }}
            className={`${styles.card} ${className}`}
            id={"card" + indexKey}>
            <article>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.pic}>
                    <img src={img?.url} alt={img?.alt} width={200} height={200} />
                </div>
                <div className={styles.desc}>
                    {description}
                </div>
            </article>
        </motion.div>
    )
}

export default ServiceCard
