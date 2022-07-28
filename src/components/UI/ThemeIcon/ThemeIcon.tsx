import React from 'react'
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg'
import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const ThemeIcon: React.FC = () => {
    const theme = useSelector((state: RootState) => state.ui.theme)

    return theme === "Light" ? <MoonIcon /> : <SunIcon />

}

export default ThemeIcon 