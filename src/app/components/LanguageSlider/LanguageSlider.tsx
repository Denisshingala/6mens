import React from 'react'
import styles from './LanguageSlider.module.css'
import Script from 'next/script'
import 'devicon';

const LanguageSlider = () => {

    const languages = [
        {
            icon: "devicon-angularjs-plain-wordmark"
        },
        {
            icon: "devicon-nextjs-original-wordmark"
        },
        {
            icon: "devicon-laravel-original-wordmark"
        },
        {
            icon: "devicon-nodejs-plain-wordmark"
        },
        {
            icon: "devicon-androidstudio-plain-wordmark"
        },
        {
            icon: "devicon-amazonwebservices-plain-wordmark"
        }
    ]

    return (
        <>
            <div className={`${styles.marquee} mt-5`}>
                <ul className={styles.marqueeContent} id="marquee-content">
                    {
                        languages.map((language, index) => {
                            return (
                                <li key={index}>
                                    <i className={language.icon} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <Script src='/js/language-slider.js'></Script>
        </>
    )
}

export default LanguageSlider
