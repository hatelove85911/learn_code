import {connect} from 'react-redux'
import TodoList from './TodoList'
import React, {Component} from 'react'
import {toggleTodo, deleteTodo} from '../actions'
import {withRouter} from 'react-router'
import {getVisibleTodos} from '../reducers/todoApp'
import {fetchTodos} from '../api/fakeRemoteServer'

class VisibleTodoList extends Component {
  componentDidMount(){
    fetchTodos(this.props.filter).then((todos) => {
      console.log(this.props.filter, todos)
    })
  }
  componentDidUpdate(prevProps){
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then((todos) => {
        console.log(this.props.filter, todos)
      })
    }
  }
  render() {
    return (
      <TodoList {...this.props} />
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
VisibleTodoList = withRouter(connect(mapStateToPropsTodoList, {
  onClick: toggleTodo,
  onDelete: deleteTodo
})(VisibleTodoList))

export default VisibleTodoList
