"use client";
import React, { useState } from 'react'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import styles from './Footer.module.css'
import bg from '../../assets/images/photorealistic-earth-planet.jpg'
import Link from 'next/link'
import { getCurrentYear } from '../../utils/date'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK } from '@/app/constants/social'
import { faEnvelope, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear: number = getCurrentYear();

  const bookACall = (
    <p className='d-flex align-items-center m-0'>
      <FontAwesomeIcon icon={faPhone} className={`${styles.icon} rounded-circle bg-white text-black p-2 mx-3`} /> Book a Call
    </p>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.2 },
        ease: "easeInOut",
      }}
      className={`${styles.footerWrapper}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(${bg.src})` }}>
      <SectionWrapper>
        <div className={styles.footer}>

          <div className={styles.contactWrapper}>
            <h4 className={styles.heading}>Connect with Us</h4>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className={styles.socialIcon} />
              inquiry@6mensinfotech.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className={styles.socialIcon} />
              +4917682312427
            </p>
            <ul className={styles.footerLinks}>
              <li className={`${styles.footerList} float-start me-3 fs-4`}>
                <Link href={INSTAGRAM_LINK} target='_blank'><FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} /></Link>
              </li>
              <li className={`${styles.footerList} float-start me-3 fs-4`}>
                <Link href={FACEBOOK_LINK} target='_blank'><FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} /></Link>
              </li>
              <li className={`${styles.footerList} float-start me-3 fs-4`}>
                <Link href={LINKEDIN_LINK} target='_blank'><FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} /></Link>
              </li>
            </ul>
          </div>
          {/* <div className={styles.addressWrapper}>
            <h4 className={styles.heading}>Mobile No.</h4>
            <p></p>
          </div> */}

          <div className={styles.pageLinksWrapper}>
            <h4 className={styles.heading}>Links</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerList}>
                <Link href="/">Home</Link><span className='m-2'>|</span>
              </li>
              <li className={styles.footerList}>
                <Link href="/about-us">About Us</Link><span className='m-2'>|</span>
              </li>
              <li className={styles.footerList}>
                <Link href="/services">Services</Link><span className='m-2'>|</span>
              </li>
              <li className={styles.footerList}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

        </div>
        <hr className='bg-white' />

        <div className={styles.footerBottom}>
          <h6>@6mansinfotech.com</h6>
          <Button label={bookACall} className='px-3' />
        </div>
      </SectionWrapper>
    </motion.div>
  )
}

export default Footer