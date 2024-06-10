import React from 'react'
import styles from './AdvanceHorizontalLine.module.css';

const AdvanceHorizontalLine = ({ content }: any) => {
    return (
        <div className={styles.separator}>
            <div className={styles.line}></div>
            <h2>{content}</h2>
            <div className={styles.line}></div>
        </div>
    )
}

export default AdvanceHorizontalLine