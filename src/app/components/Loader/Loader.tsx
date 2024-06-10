"use client"

import React, { useEffect } from 'react'
import styles from './Loader.module.css'
import $ from 'jquery'

const Loader = () => {

    useEffect(() => {
        setTimeout(function () {
            $(`.${styles.mainContainer}`).fadeOut();
        }, 2000);
    });

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}><div className={styles.line}></div></div>
        </div>
    )
}

export default Loader