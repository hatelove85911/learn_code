import todo from './todo'
import {combineReducers} from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODO':
      let nextState = {...state}
      action.todos.forEach(todo => nextState[todo.id] = todo)
      return nextState
    default:
      return state
  }
}

const allIds = (state=[], action) => {
  if (action.filter !== 'all') {
    return state
  }
  switch (action.type) {
    case 'RECEIVE_TODO':
      return action.todos.map(todo => todo.id)
    default:
      return state
  }
}
const activeIds = (state=[], action) => {
  if (action.filter !== 'active') {
    return state
  }
  switch (action.type) {
    case 'RECEIVE_TODO':
      return action.todos.map(todo => todo.id)
    default:
      return state
  }
}
const completedIds = (state=[], action) => {
  if (action.filter !== 'completed') {
    return state
  }
  switch (action.type) {
    case 'RECEIVE_TODO':
      return action.todos.map(todo => todo.id)
    default:
      return state
  }
}

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds
})

const todos = combineReducers({
  byId,
  idsByFilter
})

export default todos

export const getVisibleTodos = (state, filter) => state.idsByFilter[filter].map(id=> state.byId[id])


