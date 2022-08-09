import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../../store'
import cn from 'classnames'
import styles from './Menu.module.scss'
import { toggleMenu } from '../../../store/slices/UISlice'
import { useAuth } from '../../../hooks/useAuth'
import { removeUser } from '../../../store/slices/userSlice'

const Menu: React.FC = () => {
    const menu = useSelector((state: RootState) => state.ui.isMenuActive)
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
            })}>
                {isAuth ?
                    <>
                        <li onClick={() => hideMenu()}><Link to='/'>Home page</Link></li>
                        <li onClick={() => hideMenu()}><Link to='/todoapp'>To application</Link></li>
                        <li><span
                            onClick={() => { dispatch(removeUser()); navigate('/') }}
                        >Log Out</span></li>
                    </> :
                    <>
                        <li onClick={() => hideMenu()}><Link to='/signup'>Sing Up</Link></li>
                        <li onClick={() => hideMenu()}><Link to='/login'>Log In</Link></li>
                    </>
                }
            </ul>
        </>
    )
}

export default Menu