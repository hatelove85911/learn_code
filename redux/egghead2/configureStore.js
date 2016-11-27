import {loadState, saveState} from './localStorage'
import {createStore} from 'redux'
import throttle from 'lodash/throttle'
import todoApp from './reducers/todoApp'

const configureStore = () => {
  const initialState = loadState()
  const store = createStore(todoApp, initialState)
  store.subscribe(throttle(() => {
    console.log(Date.now(),"save state");
    saveState({
      todos: store.getState().todos
    })
  }, 2000))

  return store
}

export default configureStore
