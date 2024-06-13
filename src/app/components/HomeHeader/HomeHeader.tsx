"use client";
import React from 'react'
import styles from './HomeHeader.module.css'
import { motion } from 'framer-motion'
import backgroudUrl from '../../assets/images/header-background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const HomeHeader = () => {
  return (
    <>
      <div className={`${styles.homeHeadersWrapper} container`}>
        <div className="row">
          <motion.div className="col-lg-4"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1
            }}
          >
            <img className={`${styles.object} img-fluid`} src="keyboard.png" width="100" />
          </motion.div>
          <div className={`col-6 ${styles.homeHeader}`}>
            <div className="raw">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className={styles.headerTitle}
                style={{"background": `url('${backgroudUrl.src}') top`}}
              >
                Code for visi <FontAwesomeIcon icon={faEye} className={styles.headerTitle} style={{"background": `url('${backgroudUrl.src}') top`}}/> n!
              </motion.h1>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className={`${styles.headerDescription} py-1`}
              >
                Let's <b>Grow</b> Your <b>Business</b> Together <b>!</b> <br /><br /> <b>+ 6 Men's</b>
              </motion.p>
            </div>
          </div>
          <div className="col-2">
            <div className={`${styles.down} ${styles.hpDown} pt-5`}>
              <p className={styles.scrollText}>Scroll To Explore</p>
              <span className={styles.goDown}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;