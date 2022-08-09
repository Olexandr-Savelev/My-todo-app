import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from '../../components/AuthForm/authForm'
import { authFunctionProps } from "../../interfaces/authFormProps";
import { setUser } from "../../store/slices/userSlice";
import styles from './SignUp.module.scss'



export default function SingUp() {
    const [error, setError] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignUp = async ({ email, password }: authFunctionProps) => {
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            const token = await user.getIdToken()
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: token
            }))
            navigate('/todoapp')
        } catch (error: any) {
            const errorMessage = error;
            console.log(error)
            setError(errorMessage.message)
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2>Sign up</h2>
            {error && <h3>{error}</h3>}
            <AuthForm title='Sing Up' handleClick={handleSignUp} />
        </div>
    )
}
