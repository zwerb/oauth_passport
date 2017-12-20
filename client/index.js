import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store'
import Login from './login'
import UserPage from './user-page'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/home' component={UserPage} />
        <Route component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
)
