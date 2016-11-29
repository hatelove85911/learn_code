import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import configureStore from './configureStore'
import {fetchTodos} from './api/fakeRemoteServer'

ReactDOM.render(
  <Root store={configureStore()}/>,
  document.getElementById('root')
)

