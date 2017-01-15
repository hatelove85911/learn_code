import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import todoApp from './reducers/todoApp'

const configureStore = () => {
  const store = createStore(todoApp)
  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(todoApp, applyMiddleware(...middlewares))
}

export default configureStore
