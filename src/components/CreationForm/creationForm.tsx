import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../../store';
import { addTodo } from '../../store/todosSlice';
import styles from './creationForm.module.scss'

const CreationForm = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!title) return

        const newTodo = {
            id: String(Date.now()),
            title: title,
            completed: false,
        }

        dispatch(addTodo(newTodo))
        setTitle('')
    }

    return <form className={styles.form} onSubmit={e => handleSubmit(e)}>
        <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title" />
        <button type="submit">Add todo</button>
    </form >
}

export default CreationForm