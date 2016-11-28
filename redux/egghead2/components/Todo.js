import React from 'react'

const Todo = ({completed, text, onClick, onDelete}) => {
  return (
    <li><label onClick={onClick} style={{
                textDecoration: completed ? 'line-through' : 'none'
    }}>{text}</label> <button onClick={onDelete}>X</button></li>
  )
};

export default Todo
