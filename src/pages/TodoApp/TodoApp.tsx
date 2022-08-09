import CreationForm from '../../components/CreationForm/creationForm';
import FilterSelect from '../../components/FilterSelect/filterSelect';
import TodoList from '../../components/TodoList/todoList';
import { useAuth } from '../../hooks/useAuth';
import Page404 from '../Page404/Page404';
import styles from './TodoApp.module.scss'

export default function Home(): JSX.Element {
    const { isAuth } = useAuth()

    if (!isAuth) return <Page404 />

    return (
        <div className={styles.wrapper}>
            <h3>Your task list</h3>
            <CreationForm />
            <FilterSelect />
            <TodoList />
        </div>
    )
}
