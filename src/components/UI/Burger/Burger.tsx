import React from 'react'
import styles from './Burger.module.scss'

const Burger = () => {
    return (
        <div className={styles.burger_wrapper}>
            <span className={styles.top}></span>
            <span className={styles.center}></span>
            <span className={styles.bottom}></span>
        </div>
    )
}

export default Burger