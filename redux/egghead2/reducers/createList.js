import {combineReducers} from 'redux'

const createList = filter => {
  const ids = (state=[], action) => {
    switch (action.type) {
      case 'FETCH_TODO_SUCCESS':
        return filter === action.filter ? action.todos.map(todo => todo.id) : state
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed' ? [...state, action.todo.id] : state
      case 'TOGGLE_TODO_SUCCESS':
        if (filter !== 'all') {
          const index = state.findIndex(id => id === action.todo.id)
          return index === -1 ? [...state, action.todo.id] : [...state.slice(0, index), ...state.slice(index+1)]
        }
        return state
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODO_REQUESTS':
        return true
      case 'FETCH_TODO_FAILURE':
      case 'FETCH_TODO_SUCCESS':
        return false
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODO_FAILURE':
        return action.errorMessage
      case 'FETCH_TODO_REQUESTS':
      case 'FETCH_TODO_SUCCESS':
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
}

export default createList

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage
