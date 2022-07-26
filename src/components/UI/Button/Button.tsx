import React from 'react'
import { Link } from 'react-router-dom'
import style from './Button.module.scss'

type IButtonProps = {
    children: string,
    path: string,
    size?: 'default' | 'large',
    isDisabled?: boolean,
}

const Button: React.FC<IButtonProps> = ({ children, path, size = 'default', isDisabled = false }) => {
    const rootStyles = [style.button]

    if (size === 'large') {
        rootStyles.push(' large_btn')
    }
    if (isDisabled) {
        rootStyles.push(' disabled_link')
    }

    return (
        <Link
            className={rootStyles.join('')}
            to={path}>
            {children}
        </Link>
    )
}

export default Button;