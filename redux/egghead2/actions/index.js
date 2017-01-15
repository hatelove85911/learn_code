import {v4} from 'node-uuid'
import * as api from '../api/fakeRemoteServer'

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

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(
    response => receiveTodos(filter, response)
  )

