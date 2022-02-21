import React, { useRef } from 'react'
import "./styles.css"

interface todoProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>> // type is taken via hovering onto the setTodo in the useState.
    handleAdd: (e: React.FormEvent) => void
}

const InputField = ({todo, setTodo, handleAdd} : todoProps) => {
    //Also ->  const InputField: React.FC<todoProps>({todo, setTodo})

    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur() // removes the focus from the element
    }}>
        <input type="text" placeholder="Enter a task" className="input__box" 
            value={todo}
            ref = {inputRef}
            onChange= {
            (e) => {
                return setTodo(e.target.value)
            }
            }/>
        <button className="input_submit" type="submit">+</button>
    </form>
  )
}

export default InputField