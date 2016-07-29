import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../components/_ReduxStore'
import Terms from '../components/Terms'
import Term from '../components/Term'

const newBrowserHistory = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={newBrowserHistory}>
      <Route path="/" component={Terms} />
      <Route path="/var" component={Term} topic="var" />
      {/*Route goes here for each term view*/}
    </Router>
  </Provider>
, document.getElementById('app'))
