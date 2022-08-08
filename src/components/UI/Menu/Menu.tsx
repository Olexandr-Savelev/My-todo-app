import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../store'
import cn from 'classnames'
import styles from './Menu.module.scss'
import { toggleMenu } from '../../../store/slices/UISlice'
import { useAuth } from '../../../hooks/useAuth'
import { removeUser } from '../../../store/slices/userSlice'

const Menu: React.FC = () => {
    const menu = useSelector((state: RootState) => state.ui.isMenuActive)
    const dispatch = useDispatch()
    const { isAuth } = useAuth()

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
            <ul className={cn(styles.menu, {
                [styles.open]: menu,
            })}
                onClick={() => hideMenu()}
            >
                {isAuth ?
                    <>
                        <li><Link to='/'>Home page</Link></li>
                        <li><Link to='/todoapp'>To application</Link></li>
                        <li><span
                            onClick={() => dispatch(removeUser())}
                        >Log Out</span></li>
                    </> :
                    <>
                        <li><Link to='/signup'>Sing Up</Link></li>
                        <li><Link to='/login'>Log In</Link></li>
                    </>
                }
            </ul>
        </>
    )
}

export default Menu