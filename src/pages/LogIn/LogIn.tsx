import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from '../../components/AuthForm/authForm'
import { authFunctionProps } from "../../interfaces/authFormProps";
import { setUser } from "../../store/userSlice";
import styles from './LogIn.module.scss'


export default function LogIn() {
    const [error, setError] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogIn = async ({ email, password }: authFunctionProps) => {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            const token = await user.getIdToken()
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: token,
            }))
            navigate('/todoapp')

        } catch (error: any) {
            const errorMessage = error.message;
            setError(errorMessage)
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2>Log In</h2>
            {error && <h3>{error}</h3>}
            <AuthForm title='Log In' handleClick={handleLogIn} />
        </div>
    )
}
