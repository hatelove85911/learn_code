import {loadState, saveState} from './localStorage'
import {createStore} from 'redux'
import throttle from 'lodash/throttle'
import todoApp from './reducers/todoApp'


const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch

  if(!console.group){
    return rawDispatch
  }

  return action => {
    console.group(action.type)
    console.log('%c previous state', 'color: grey',  store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}


const configureStore = () => {
  const initialState = loadState()
  const store = createStore(todoApp, initialState)

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.subscribe(throttle(() => {
    console.log(Date.now(),"save state");
    saveState({
      todos: store.getState().todos
    })
  }, 2000))

  return store
}

export default configureStore
