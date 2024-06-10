"use client"
import React from 'react'
import styles from './ClientReviewCards.module.css'
import { clientReviews } from './clientReviews'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from 'framer-motion'

const getStars = (number: any) => {
    let stars = []
    for (let i = 0; i < number; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} className={`${styles.starIcon} ms-1`} key={i}/>)
    }
    return stars;
}

const ClientReviewCards = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                slidesPerView="auto"
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    756: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 25
                    }
                }}
                className='my-5'
            >
                {
                    clientReviews.map((review, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1,
                                        x: { type: "spring", stiffness: 60 },
                                        ease: "easeInOut",
                                    }}
                                    className={styles.sliderWrapperCard}>
                                    <h5>{review.client_name}</h5>
                                    <p>
                                        {
                                            getStars(review.rating).map((star) => star)
                                        }
                                    </p>
                                    <p>{review.review}</p>
                                </motion.div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default ClientReviewCards