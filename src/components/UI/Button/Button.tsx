import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import style from './Button.module.scss'

type IButtonProps = {
    children: string,
    path: string,
    size?: 'default' | 'large',
    isDisabled?: boolean,
}

const Button: React.FC<IButtonProps> = ({ children, path, size = 'default', isDisabled = false }) => {

    return (
        <Link
            className={cn(style.button, {
                [style.large]: size === 'large',
                [style.disabled]: isDisabled
            })}
            to={path}>
            {children}
        </Link>
    )
}

export default Button;