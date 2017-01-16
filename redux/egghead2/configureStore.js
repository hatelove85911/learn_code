import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import todoApp from './reducers/todoApp'

const trunk = (store) => (next) => (action) => {
  typeof action === 'function' ? action(store.dispatch) : next(action)
}
const configureStore = () => {
  const store = createStore(todoApp)
  const middlewares = [trunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(todoApp, applyMiddleware(...middlewares))
}

export default configureStore
