import Todo from './Todo'
import React from 'react'

const TodoList = ({todos, onClick, onDelete }) => {
  return (
    <ul>
      {todos.map(t => {
        return (
          <Todo {...t} key={t.id} onClick={() => {
            onClick(t.id)
          }} onDelete={() => {
            onDelete(t.id)
          }}/>
        )
      })}
    </ul>
  )
}

export default TodoList
