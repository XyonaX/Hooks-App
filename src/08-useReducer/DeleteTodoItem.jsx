import { useState } from "react";

export const DeleteTodoItem = ({onDeleteTodo}) => {
  

    const [todos, setTodos] = useState();

    const onDelete = (id) => {
        if(!todos) return;
        setTodos(todos.filter(todo => todo.id !== id));

    }
    
  
    return (
        <>
            
            <button onClick={onDelete(todos)} className="btn btn-danger">X</button>
        
        </>
    )
}
