import {v4} from 'node-uuid'

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
