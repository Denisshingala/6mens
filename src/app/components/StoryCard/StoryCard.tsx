"use client";
import React, { ReactNode, isValidElement } from 'react'
import styles from './StoryCard.module.css'
import { motion } from 'framer-motion';

type StoryCardType = {
    img?: ReactNode | string;
    description?: ReactNode | string;
    year?: ReactNode | string;
    className?: string;
    keys?: Number
}

const StoryCard = ({ img = '', description = '', year = '', className = '', keys = 0 }: StoryCardType) => {
    return (
        <>
            <motion.div
                initial={{ y: (Number(keys) % 2 != 0 ? 100 : -100), opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.1,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeInOut",
                    duration: 1,
                }}
                className={`${styles.storyWrapper} ${className}`} id={`story-${keys}`}>
                {typeof img == "string" ? <img src={img} className={styles.imgWrapper} /> : <>{img}</>}
                <div className="p-3 text-white">
                    {isValidElement(description) ? description : <span className='float-start '>{description}</span>}
                    {isValidElement(description) ? year : <span className='float-end '>{year}</span>}
                </div>
            </motion.div >
        </>
    )
}

export default StoryCard
