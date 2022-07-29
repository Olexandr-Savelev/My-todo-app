import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../store'
import ThemeButton from '../ThemeBotton/ThemeButton'
import cn from 'classnames'
import styles from './Menu.module.scss'
import { toggleMenu } from '../../../store/UISlice'

const Menu: React.FC = () => {
    const menu = useSelector((state: RootState) => state.ui.isMenuActive)
    const dispatch = useDispatch()

    const hideMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <>
            <div className={cn(styles.outer, {
                [styles.active]: menu
            })}
                onClick={() => hideMenu()}
            >
            </div>
            <div className={cn(styles.menu, {
                [styles.open]: menu,
                [styles.close]: !menu
            })}>
                <Link to='/signup'>Sing Up</Link>
                <Link to='/login'>Log In</Link>
                <ThemeButton />
            </div>
        </>


    )
}

export default Menu