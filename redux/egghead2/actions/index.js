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
const receiveTodos = (filter, todos) => ({
      type: 'RECEIVE_TODO',
      filter,
      todos
})

const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }
  dispatch(requestTodos(filter))

  return api.fetchTodos(filter).then(
    response => dispatch(receiveTodos(filter, response))
  )
}
