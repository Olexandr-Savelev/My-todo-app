import React from 'react'
import Button from '../../components/UI/Button/Button'
import styles from './Page404.module.scss'

const Page404: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <h2>This page is not exist!</h2>
            <Button path='/'>Main Page</Button>
        </div>
    )
}

export default Page404