import todo from './todo'
import {combineReducers} from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id] : todo(state[action.id], action)
      }
    case 'REMOVE_TODO':
      const {[action.id]:removed, ...remaining} = state
      return remaining
    default:
      return state
  }
}

const allIds = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}

const todos = combineReducers({
  byId,
  allIds
})

export default todos

const getAllTodos = state => state.allIds.map(id=>state.byId[id])

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state)
  switch (filter) {
    case 'all':
      return allTodos
    case 'active':
      return allTodos.filter((t) => {
        return !t.completed
      })
    case 'completed':
      return allTodos.filter((t) => {
        return t.completed
      })
    default:
      return allTodos
  }
}

