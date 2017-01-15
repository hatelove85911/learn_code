import {connect} from 'react-redux'
import TodoList from './TodoList'
import React, {Component} from 'react'
import * as actions from '../actions'
import {withRouter} from 'react-router'
import {getVisibleTodos} from '../reducers/todoApp'

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
    const {toggleTodo, deleteTodo, ...rest} = this.props
    return (
      <TodoList {...rest} onTodoClick={toggleTodo} onDeleteTodo={deleteTodo}/>
    )
  }
}


const mapStateToPropsTodoList = (state, {params}) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
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
