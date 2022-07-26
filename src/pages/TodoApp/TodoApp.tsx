import CreationForm from '../../components/CreationForm/creationForm';
import FilterSelect from '../../components/FilterSelect/filterSelect';
import TodoList from '../../components/TodoList/todoList';
import styles from './TodoApp.module.scss'

export default function Home(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <h3>Your task list</h3>
            <CreationForm />
            <FilterSelect />
            <TodoList />
        </div>
    )
}
