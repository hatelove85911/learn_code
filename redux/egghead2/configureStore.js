import {createStore} from 'redux'
import todoApp from './reducers/todoApp'

const promise = (store) => (next) => (action) => {
  if(typeof action.then === 'function'){
    return action.then(next)
  }
  return next(action)
}

const logger = (store) =>(next) => {
  if(!console.group){
    return next
  }

  return (action) => {
    console.group(action.type)
    console.log('%c previous state', 'color: grey',  store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = next(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const wrapDispatchWithMiddleware = (store, middlewares) => {
  middlewares.slice().reverse().forEach(mw => store.dispatch = mw(store)(store.dispatch))
}

const configureStore = () => {
  const store = createStore(todoApp)
  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  wrapDispatchWithMiddleware(store, middlewares)

  return store
}

export default configureStore
