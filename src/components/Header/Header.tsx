import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo-react.svg'
import { useAuth } from '../../hooks/useAuth'
import { setUser } from '../../store/userSlice'
import Burger from '../UI/Burger/Burger'
import Button from '../UI/Button/Button'
import ThemeButton from '../UI/ThemeBotton/ThemeButton'
import styles from './Header.module.scss'

const Header: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuth } = useAuth()

    const logOutHandler = () => {
        dispatch(setUser({
            email: null,
            id: null,
            token: null,
        }))
        navigate('/')
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.logo_wrap} to='/'>
                    <Logo className={styles.logo} />
                </Link>
                <nav className={styles.nav}>
                    <ThemeButton />
                    {isAuth ?
                        <button className={styles.logout}
                            onClick={logOutHandler}
                        >
                            Log Out
                        </button>
                        :
                        <>
                            <Link className={styles.login} to='/login'>Log In</Link>
                            <Button path='/signup'>Sign Up</Button>
                        </>}
                </nav>
                <Burger />
            </div>
        </header>
    )
}

export default Header

