import {connect} from 'react-redux'
import TodoList from './TodoList'
import React from 'react'
import {toggleTodo} from '../actions'
import {withRouter} from 'react-router'
import {getVisibleTodos} from '../reducers/todoApp'


const mapStateToPropsTodoList = (state, {params}) => {
  return {
    todos: getVisibleTodos(state, params.filter)
  }
}
// const mapDispatchToPropsTodoList = dispatch => {
//   return {
//     onClick: todoid => dispatch(toggleTodo(todoid))
//   }
// }
const VisibleTodoList = withRouter(connect(mapStateToPropsTodoList, {
  onClick: toggleTodo
})(TodoList))

export default VisibleTodoList
