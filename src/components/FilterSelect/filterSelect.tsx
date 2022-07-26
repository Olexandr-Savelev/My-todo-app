import Select, { SingleValue } from 'react-select'
import { useAppDispatch } from '../../store'
import { setFilter } from '../../store/filterSlice'

export default function FilterSelect(): JSX.Element {
  const dispatch = useAppDispatch()

  const options = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ]

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      padding: 7,
    }),

    input: (provided: any) => ({
      ...provided,
      minWidth: 100
    })
  }

  const handleSelect = (e: SingleValue<{ value: string, label: string }>) => {
    dispatch(setFilter(e?.value))
  }

  return (
    <>
      <Select
        onChange={(e) => handleSelect(e)}
        defaultValue={{ value: "all", label: "All" }}
        styles={customStyles}
        options={options} />
    </>
  )
}
