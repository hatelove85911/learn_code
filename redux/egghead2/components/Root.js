import {Provider} from 'react-redux'
import TodoApp from './TodoApp'
import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={TodoApp}/>
    </Router>
  </Provider>
)

export default Root

