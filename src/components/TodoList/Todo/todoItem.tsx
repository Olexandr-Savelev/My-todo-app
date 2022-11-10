import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { Todo } from '../../../interfaces/todoType'
import { useAppDispatch } from '../../../store';
import { removeTodo, renameTodo } from "../../../store/slices/todosSlice"
import { ReactComponent as Pen } from "../../../assets/icons/pen.svg"
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg"
import { ReactComponent as CheckMark } from "../../../assets/icons/check-mark.svg"
import style from "./todoItem.module.scss"
import Checkbox from "../../UI/Checkbox/Checkbox"
import cn from "classnames"

type ITodoItemProps = {
  todo: Todo
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const dispatch = useAppDispatch()

  const handleEdit = () => {
    setIsEditable((isEditable) => !isEditable)
  }

  const handleRename = () => {
    dispatch(renameTodo({ ...todo, title: title }))
    handleEdit()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={style.todo}
    >
      <Checkbox checked={todo.completed} id={todo.id} />
      {isEditable ? (
        <input
          type="text"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h3
          className={cn(style.todo__title, {
            [style.done]: todo.completed,
          })}
        >
          {todo.title}
        </h3>
      )}
      {isEditable ? (
        <CheckMark
          onClick={handleRename}
          width={20}
          height={20}
          fill={"green"}
          title={"OK"}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <Pen
          onClick={handleEdit}
          width={18}
          height={18}
          title={"Edit"}
          style={{ cursor: "pointer" }}
        />
      )}

      <Cross
        onClick={() => dispatch(removeTodo(todo.id))}
        width={18}
        height={18}
        fill={"red"}
        title={"Delete"}
        style={{ cursor: "pointer" }}
      />
    </motion.div>
  )
}

export default TodoItem;