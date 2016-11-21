<<<<<<< HEAD
import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom'
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

function counters(counts = [], action) {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [...counts, 0]
      break;
    case 'REMOVE_COUNTER':
      return [...counts.slice(0, action.index), ...counts.slice(action.index + 1)]
      break;
    case 'INCREMENT':
    case 'DECREMENT':
      return [...counts.slice(0, action.index), counter(counts[action.index], action), ...counts.slice(action.index + 1)]
      break;
    default:
      return counts;
  }
}

function addCounter(list) {
  return [...list, 0];
}
function removeCounter(list, index) {
  return [...list.slice(0, index), ...list.slice(index + 1)]
}


const store = createStore(counters)


const Counter = ({value, onIncrement, onDecrement}) => {
  return (
    <div>
      <h1> {value}</h1>
      <button onClick={onIncrement}> + </button>
      <button onClick={onDecrement}> - </button>
    </div>
  )
}

const Counters = ({counts, onAddCounter, onRemoveCounter}) => {
  return (
    <div>
      <button onClick={onAddCounter}>add counter</button>
      {counts.map((count, i) => (
        <Counter value={counts[i]}  onIncrement={ () => {
      store.dispatch({
        type: "INCREMENT",
        index: i
      })
    }} onDecrement={() => {
      store.dispatch({
        type: "DECREMENT",
        index: i
      })}
    }></Counter>
      ))}
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <Counters counts={store.getState()} onAddCounter={() => {
      store.dispatch({
        type: "ADD_COUNTER"
      })
    }} />, document.getElementById('root')
  )
};
store.subscribe(render)
render()
||||||| merged common ancestors
=======
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
>>>>>>> 6cef02ea51f0adac6b352585663157568c489fdd
