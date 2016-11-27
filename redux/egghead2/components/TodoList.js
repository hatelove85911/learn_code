import Todo from './Todo'
import React from 'react'

const TodoList = ({todos, onClick }) => {
  return (
    <ul>
      {todos.map(t => {
        return (
          <Todo {...t} key={t.id} onClick={() => {
            onClick(t.id)
          }}/>
        )
      })}
    </ul>
  )
}

export default TodoList
