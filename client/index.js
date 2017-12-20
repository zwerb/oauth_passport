import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store'
import Login from './login'
import UserPage from './user-page'

class Main extends Component {
  render () {
    return (
      <Switch>
        <Route path='/home' component={UserPage} />
        <Route component={Login} />
      </Switch>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
)
