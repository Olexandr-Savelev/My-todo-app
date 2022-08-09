import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { toggleTheme } from '../../../store/slices/UISlice'
import ThemeIcon from '../ThemeIcon/ThemeIcon'
import styles from './ThemeButton.module.scss'


const ThemeButton: React.FC = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.ui.theme)

    const themeHandler = () => {
        dispatch(toggleTheme())
    }
    return (
        <>
            <span
                className={styles.theme_btn}
                onClick={() => themeHandler()}>
                <ThemeIcon />
                <span className={styles.theme_btn__text}>
                    {theme === "Light" ?
                        "Dark " :
                        "Light "}
                    Mode
                </span>
            </span>
            <span className={styles.line}></span>
        </>

    )
}

export default ThemeButton