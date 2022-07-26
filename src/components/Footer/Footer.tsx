import React from 'react'
import style from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                Application developed with using React JS, Redux toolkit, Typescript and Google Firebase Authentication.
            </div>
        </footer>
    )
}
export default Footer