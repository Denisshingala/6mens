"use client"

import React from 'react'
import styles from './TeamExpert.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import { teamExperts } from './teamExpert'
import ProfileCard from '../ProfileCard/ProfileCard'

const TeamExpert = () => {

    const subHeading = (
        <p className={styles.teamExpertSubHeading}>
            We have assembled a group of <b>highly skilled</b> professionals who are dedicated to delivering <b>exceptional</b> results.
        </p>
    )
    return (
        <div className={`${styles.teamExpertWrapper} pb-5`}>
            <SectionTitle heading="Team Expert" subHeading={subHeading} />
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