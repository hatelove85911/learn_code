import byId, * as fromById from './byId'
import createList, * as fromList from './createList'
import {combineReducers} from 'redux'

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

const todos = combineReducers({
  byId,
  listByFilter
})

export default todos

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodoById(state.byId, id))
}

export const getIsFetching = (state, filter) => {
  return fromList.getIsFetching(state.listByFilter[filter])
}

export const getErrorMessage = (state, filter) => {
  return fromList.getErrorMessage(state.listByFilter[filter])
}
