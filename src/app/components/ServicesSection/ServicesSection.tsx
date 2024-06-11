"use client";

import React from 'react'
import styles from './ServicesSection.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ServiceCard from '../ServiceCard/ServiceCard'
import { services } from '../../services/services'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import './ServiceSection.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SeoButton from '../SeoButton/SeoButton';

const ServicesSection = () => {

    const serviceSubHeading = (
        <p className={styles.titleSubHeading}>
            <b>Zero to zenith:</b> Igniting IT innovation with fresh minds and boundless ambition.
        </p>
    )

    return (
        <>
            <div className={`${styles.serviceSectionWrapper} text-center`}>
                <SectionTitle heading="Transforming ideas into digital reality with expert IT solutions." subHeading={serviceSubHeading} className="pb-0" />
            </div>
            <SeoButton />
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                slidesPerView="auto"
                pagination={{ clickable: true }}
                keyboard={{
                    enabled: true,
                }}
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
                        slidesPerView: 4,
                        spaceBetween: 25
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    }
                }}
                className='my-5'
            >
                {
                    services.length && services.map((service, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ServiceCard
                                    img={service?.img}
                                    title={service.title}
                                    description={service.description}
                                    indexKey={index}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default ServicesSection
