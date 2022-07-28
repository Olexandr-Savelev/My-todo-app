import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import { useAuth } from "../../hooks/useAuth";
import styles from './Home.module.scss'

export default function Home(): JSX.Element {
    const { isAuth } = useAuth()

    return (
        <div className={styles.wrapper}>
            <h2>Welcome!</h2>
            <p>This application provides a simple functionality which allows writing tasks you need to do. You can add, remove and toggle status of tasks. Also, you can set visibility of task list with using select filter. But this functional will be shared for you after <Link className={styles.link} to='/signup'>registration</Link> or <Link className={styles.link} to='/login'>login</Link> if you already have an account.</p>
            <Button
                size="large"
                path='/todoapp'
                isDisabled={!isAuth}
            >
                To application
            </Button>

        </div >
    )
}
