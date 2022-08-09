import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { toggleMenu } from '../../../store/slices/UISlice'
import cn from 'classnames'
import styles from './Burger.module.scss'

const Burger: React.FC = () => {
    const menu = useSelector((state: RootState) => state.ui.isMenuActive)
    const dispatch = useDispatch()

    const handleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className={cn(styles.burger_wrapper, {
            [styles.active]: menu
        })}
            onClick={() => handleMenu()}
        >
            <span className={styles.top}></span>
            <span className={styles.center}></span>
            <span className={styles.bottom}></span>
        </div>
    )
}

export default Burger