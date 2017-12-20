import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  user: {}
}

const reducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware))
