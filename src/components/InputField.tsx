import React from 'react'
import "./styles.css"

interface todoProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>> // type is taken via hovering onto the setTodo in the useState.
    handleAdd: (e: React.FormEvent) => void
}

const InputField = ({todo, setTodo, handleAdd} : todoProps) => {
    //Also ->  const InputField: React.FC<todoProps>({todo, setTodo})
  return (
    <form className="input" onSubmit={handleAdd}>
        <input type="text" placeholder="Enter a task" className="input__box" 
            value={todo}
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