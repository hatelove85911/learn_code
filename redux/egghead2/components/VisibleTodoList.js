import {connect} from 'react-redux'
import TodoList from './TodoList'
import React, {Component} from 'react'
import * as actions from '../actions'
import {withRouter} from 'react-router'
import {getVisibleTodos, getIsFetching} from '../reducers/todoApp'

class VisibleTodoList extends Component {
  componentDidMount(){
    this.fetchData()
  }
  componentDidUpdate(prevProps){
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }
  fetchData() {
    const {filter, fetchTodos} = this.props
    fetchTodos(filter)
  }
  render() {
    const {toggleTodo, deleteTodo, isFetching, todos} = this.props

    if(isFetching && !todos.length) {
      return (
        <p> Loading ... </p>
      )
    }

    return (
      <TodoList todos={todos} onTodoClick={toggleTodo} onDeleteTodo={deleteTodo}/>
    )
  }
}


const mapStateToPropsTodoList = (state, {params}) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}
// const mapDispatchToPropsTodoList = dispatch => {
//   return {
//     onClick: todoid => dispatch(toggleTodo(todoid))
//   }
// }
VisibleTodoList = withRouter(connect(mapStateToPropsTodoList, actions)(VisibleTodoList))

export default VisibleTodoList
