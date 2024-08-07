"use client"
import React from 'react'
import styles from './ProfileCard.module.css';
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const ProfileCard = ({ profile, name, profession, description, socialLinks = { facebook: "#", instagram: "#", twitter: "#", linkedin: "#" } }: any) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeInOut",
            }}
            className={styles.container}>
            <div className={styles.shape}>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={profile} alt={name} width={200} height={200} />
                </div>
            </div>
            <h4 className={styles.name}>{name}</h4>
            <h5 className={styles.title}>{profession}</h5>
            <p className={styles.subHeading}>{description}</p>
            <div className={styles.icons}>
                <Link href={socialLinks.instagram} target='_blank'><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href={socialLinks.linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            </div>
        </motion.div>
    )
}

export default ProfileCard