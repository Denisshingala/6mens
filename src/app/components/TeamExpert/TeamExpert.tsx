"use client"

import React from 'react'
import styles from './TeamExpert.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import { teamExperts } from './teamExpert'
import ProfileCard from '../ProfileCard/ProfileCard'

const TeamExpert = () => {

    const subHeading = (
        <p className={styles.teamExpertSubHeading}>
            Discover the <b>talented professionals</b> at 6Mens Infotech, dedicated to delivering <b>innovative digital</b> solutions and <b>exceptional</b> client service.
        </p>
    )
    return (
        <div className={`${styles.teamExpertWrapper} pb-5`}>
            <SectionTitle heading="Meet Our Team" subHeading={subHeading} />
            <div className={styles.teamExpertCards}>
                {
                    teamExperts && teamExperts.map((teamExpert, index) => {
                        return (
                            <ProfileCard
                                key={index}
                                profile={teamExpert.profile}
                                name={teamExpert.name}
                                profession={teamExpert.profession}
                                description={teamExpert.description}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TeamExpert