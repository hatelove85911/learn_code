import {combineReducers} from 'redux'

const createList = filter => {
  const ids = (state=[], action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODO_SUCCESS':
        return action.todos.map(todo => todo.id)
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
