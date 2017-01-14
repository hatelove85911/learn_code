import Todo from './Todo'
import React from 'react'

const TodoList = ({todos, onTodoClick, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(t => {
        return (
          <Todo {...t} key={t.id} onClick={() => {
            onTodoClick(t.id)
          }} onDelete={() => {
            onDeleteTodo(t.id)
          }}/>
        )
      })}
    </ul>
  )
}

export default TodoList
