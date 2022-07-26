import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo-react.svg'
import { useAuth } from '../../hooks/useAuth'
import { RootState } from '../../store'
import { toggleTheme } from '../../store/themeSlice'
import { setUser } from '../../store/userSlice'
import Button from '../UI/Button/Button'
import ThemeIcon from '../UI/ThemeIcon/ThemeIcon'
import styles from './Header.module.scss'

const Header: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme)
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

    const themeHandler = () => {
        dispatch(toggleTheme())
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.logo_wrap} to='/'>
                    <Logo className={styles.logo} />
                </Link>
                <nav className={styles.nav}>
                    <span
                        className={styles.theme_btn}
                        onClick={() => themeHandler()}>
                        <ThemeIcon />
                        {theme === "Light" ?
                            "Dark " :
                            "Light "}
                        Mode
                    </span>
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
            </div>
        </header>
    )
}

export default Header

