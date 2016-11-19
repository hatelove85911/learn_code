import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value
      break;
    case 'DECREMENT':
      return state - action.value
      break;
    default:
      return state
  }
}

const store = createStore(counter)


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: store.getState()
    }
    store.subscribe(this.updateState.bind(this))
  }
  updateState() {
    this.setState({
      count: store.getState()
    })
  }
  count(number) {
    store.dispatch({
      type: number > 0 ? 'INCREMENT' : (number < 0 ? 'DECREMENT' : 'FUCK' ),
      value: Math.abs(number)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.count.bind(this, 1)}>increase</button>
        <button onClick={this.count.bind(this, -1)}>decrease</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
