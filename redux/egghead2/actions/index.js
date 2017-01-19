import * as api from '../api/fakeRemoteServer'
import {getIsFetching} from '../reducers/todoApp'

export const deleteTodo = (todoid) => ({
      type: 'DELETE_TODO',
      id: todoid
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }
  dispatch({
    type: 'FETCH_TODO_REQUESTS',
    filter
  })

  return api.fetchTodos(filter).then(
    response => dispatch({
      type: 'FETCH_TODO_SUCCESS',
      filter,
      todos: response
    }),
    error => dispatch({
      type: 'FETCH_TODO_FAILURE',
      filter,
      errorMessage: error.message || 'something went wrong!'
    })
  )
}

export const addTodo = text => (dispatch) => {
  return api.addTodo(text).then(
    response => dispatch({
      type: 'ADD_TODO_SUCCESS',
      todo: response
    })
  )
}

export const toggleTodo = id => (dispatch) => {
  return api.toggleTodo(id).then(
    response => dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      todo: response
    })
  )
}
