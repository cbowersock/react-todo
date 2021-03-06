import React from 'react';

const TodoItem = (props) => {
    const completeStyle = {
        textDecoration: 'line-through'
    }
    return (
        <div className="todo">
            <input 
                type="checkbox" 
                checked={props.todo.completed} 
                onChange={() => props.handleChange(props.todo.id)}/>
            <p style={props.todo.completed ? completeStyle : null}>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem;