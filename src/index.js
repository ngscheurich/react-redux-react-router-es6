import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import routes from './routes'
import { loadCourses } from './actions/courseActions'
import 'bootstrap/dist/css/bootstrap.css'

let store = configureStore()
store.dispatch(loadCourses())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#root')
)
