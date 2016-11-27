import {connect} from 'react-redux'
import TodoList from './TodoList'
import React from 'react'
import {toggleTodo} from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter((t) => {
        return !t.completed
      })
    case 'SHOW_COMPLETED':
      return todos.filter((t) => {
        return t.completed
      })
    default:
      return todos
  }
}

const mapStateToPropsTodoList = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
const mapDispatchToPropsTodoList = dispatch => {
  return {
    onClick: todoid => dispatch(toggleTodo(todoid))
  }
}
const VisibleTodoList = connect(mapStateToPropsTodoList, mapDispatchToPropsTodoList)(TodoList);

export default VisibleTodoList
