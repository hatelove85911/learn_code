import expect from 'expect'
import {createStore} from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
      break;
    case 'DECREMENT':
      return state - 1
      break;
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state
  let listeners = []

  const getState = () => {
    return state
  };

  const dispatch = (action) => {
    state = reducer(state, action)
    return state
  };
  
  const subscribe = (listener) => {
    listeners.push(listener)
  };

  return {
    getState,
    dispatch,
    subscribe
  }
};

const store = createStore(counter)

const render = () => {
  document.body.innerText = store.getState()
};
store.subscribe(render)

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'})
})
render()
