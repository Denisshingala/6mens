"use client";
import React from 'react'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import styles from './Header.module.css'
import Button from '../Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import CalCalender from '../CalCalender/CalCalender';

const Header = () => {
    const pathname = usePathname();

    return (
        <>
            <motion.nav className={styles.headerWrapper}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                }}
            >
                <SectionWrapper>
                    <div className={styles.header}>
                        <div className="logo">
                            <Link href="/"><img src="/img/logo/6Man.png" width={120} height={120} className='img-fluid' alt="logo" /></Link>
                        </div>
                        <div className={styles.hamburger} id="hamburger">
                            <div className={styles.line1}></div>
                            <div className={styles.line2}></div>
                            <div className={styles.line3}></div>
                        </div>
                        <ul className={`${styles.navLinks} pt-4`} id="nav-links">
                            <li className={`${styles.navList} mx-3`}>
                                <Link href="/" className={`${pathname === '/' ? styles.active : ''}`} >Home</Link>
                            </li>
                            <li className={`${styles.navList} mx-3`}>
                                <Link href="/about-us" className={`${pathname === '/about-us' ? styles.active : ''}`}>About Us</Link>
                            </li>
                            <li className={`${styles.navList} mx-3`}>
                                <Link href="/services" className={`${pathname === '/services' ? styles.active : ''}`}>Services</Link>
                            </li>
                            <li className={`${styles.navList} mx-3`}>
                                <Link href="/contact" className={`${pathname === '/contact' ? styles.active : ''}`}>Contact Us</Link>
                            </li>
                            <li className={`${styles.navList} mx-3`}>
                                <Button label="Book a Call" />
                            </li>
                        </ul>
                    </div>
                </SectionWrapper>
            </motion.nav >
            <Script src="/js/navbar.js"></Script>
        </>
    )
}

export default Header