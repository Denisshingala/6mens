import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './ClientReview.module.css'
import ClientReviewCards from '../ClientReviewCards/ClientReviewCards'

const ClientReview = () => {
    const subHeading = (
        <p className={styles.clientReviewSubHeading}>
            Please take a <b>look</b> at what our clients have to say about us in <b>their reviews</b>.
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