import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'
import React from 'react'

const TodoApp = () => {
  return (
    <div>
      <AddTodo/>
      <VisibleTodoList />
      <Footer/>
    </div>
  )
}

export default TodoApp
