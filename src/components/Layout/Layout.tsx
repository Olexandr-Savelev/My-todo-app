import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

interface ILayout {
    children?: JSX.Element
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.container}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout