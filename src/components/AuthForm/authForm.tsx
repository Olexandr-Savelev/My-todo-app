import { useState } from "react"
import { AuthFormProps } from "../../interfaces/authFormProps"
import styles from './authForm.module.scss'

const AuthForm: React.FC<AuthFormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={styles.wrapper}>
            <input
                type='email'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className={styles.button}
                onClick={() => handleClick({ email, password })}
            >{title}
            </button>
        </div>
    )
}

export default AuthForm