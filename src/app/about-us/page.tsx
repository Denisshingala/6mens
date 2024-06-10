"use client"
import React from 'react'
import styles from '../styles/about-us.module.css';
import AboutContainer from '../components/AboutContainer/AboutContainer';
import { aboutUs } from './aboutUs';
import { motion } from 'framer-motion';
import HorizontalLine from '../components/HorizontalLine/HorizontalLine';
import Loader from '../components/Loader/Loader';

const AboutUs = () => {
  return (
    <>
      <Loader />
      <div className={styles.aboutUsSectionWrapper}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            y: { type: "spring", stiffness: 60 },
            ease: "easeInOut",
            duration: 0.6
          }}
          className={`${styles.aboutUsHeading}`}>
          <img src="img/logo/6MenAboutUs.png" className='img-fluid' alt="about logo" />
        </motion.div>
        <HorizontalLine />
        <div className={`${styles.aboutUsCards} px-4`}>
          {
            aboutUs.map((about, index) => {
              return (
                <div key={index}>
                  <div className={`${styles.comment}`} >
                    <div className={styles.circle}></div>
                  </div>
                  <div className="w-100 overflow-auto">
                    <AboutContainer
                      img={about.img}
                      heading={about.title}
                      content={about.description}
                      index={index}
                      key={index}
                      className={`${index % 2 ? "float-start" : "float-end"} my-5`}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div >
    </>
  )
}

export default AboutUs