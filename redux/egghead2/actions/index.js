import {v4} from 'node-uuid'
import * as api from '../api/fakeRemoteServer'
import {getIsFetching} from '../reducers/todoApp'

export const addTodo = (text) => ({
            type: 'ADD_TODO',
            id: v4(),
            text
          })

export const toggleTodo = (todoid) => ({
      type: 'TOGGLE_TODO',
      id: todoid
})
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
