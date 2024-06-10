import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './ClientReview.module.css'
import ClientReviewCards from '../ClientReviewCards/ClientReviewCards'

const ClientReview = () => {
    const subHeading = (
        <p className={styles.clientReviewSubHeading}>
            Amazing website! It exceeded all my <b>expectations</b>, delivering an <b>exceptional</b> user experience.
        </p>
    )

    return (
        <>
            <div className={styles.clientReviewSectionWrapper}>
                <SectionTitle heading="See Our Client Review" subHeading={subHeading} />
            </div>
            <ClientReviewCards />
        </>
    )
}

export default ClientReview