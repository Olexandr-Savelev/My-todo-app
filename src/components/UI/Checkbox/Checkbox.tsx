import React from "react"
import { useAppDispatch } from "../../../store"
import { toggleComplete } from "../../../store/slices/todosSlice"
import styles from "./Checkbox.module.scss"

interface CheckboxProps {
  checked: boolean
  id: string
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, id }) => {
  const dispatch = useAppDispatch()
  return (
    <label
      className={styles.container}
      htmlFor="checkbox"
      onClick={() => dispatch(toggleComplete(id))}
    >
      <input
        name="checkbox"
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
      />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default Checkbox
