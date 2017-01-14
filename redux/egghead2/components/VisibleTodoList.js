import {connect} from 'react-redux'
import TodoList from './TodoList'
import React, {Component} from 'react'
import * as actions from '../actions'
import {withRouter} from 'react-router'
import {getVisibleTodos} from '../reducers/todoApp'
import {fetchTodos} from '../api/fakeRemoteServer'

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
    const {filter, receiveTodos} = this.props
    fetchTodos(filter).then((todos) => {
      receiveTodos(filter, todos)
    })
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
