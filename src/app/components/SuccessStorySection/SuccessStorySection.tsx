import React from 'react'
import styles from './SuccessStorySection.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import StoryCard from '../StoryCard/StoryCard';
import LanguageSlider from '../LanguageSlider/LanguageSlider';

const SuccessStorySection = () => {
    const subHeading = (
        <p className={styles.subHeading}>
            We've <b>successfully</b> completed two projects, leaving our clients <b>happy</b> and <b>satisfied</b>. Join us on this <b>creative</b> journey and see how we bring ideas to life.
        </p>
    );

    const stories = [
        {
            img: "/img/story-1.png",
            description: "Ui/Ux & Development Project",
            year: 2017
        },
        {
            img: "/img/story-2.png",
            description: "Work With Google Project",
            year: 2021
        }
    ]

    return (
        <>
            <div className={`${styles.successStorySectionWrapper}`}>
                <div className={`${styles.projectWrapperBg}`}>
                    <img src="img/planet-outline.svg" alt="planet" className={styles.halfPlanet} />
                    <img src="img/purple-light.svg" alt="purple light" className={styles.rotatingImg1} />
                    <img src="img/green-light.svg" alt="green light" className={styles.rotatingImg2} />
                </div>
                <div className={styles.successStorySection}>
                    <SectionTitle heading="See Our Success Story" subHeading={subHeading} />
                    <div className={styles.storyCardWrapper}>
                        {
                            stories.map((story, index) => {
                                return (
                                    <StoryCard
                                        img={story.img}
                                        description={story.description}
                                        year={story.year}
                                        keys={index}
                                    />
                                )
                            })
                        }
                    </div>
                    <LanguageSlider />
                </div>
            </div>
        </>
    )
}

export default SuccessStorySection;