import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../components/_ReduxStore'
import Home from '../components/Home'
import Html from '../components/Html'
import Term from '../components/Term'

const newBrowserHistory = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={newBrowserHistory}>
      <Route
        path="/"
        component={Home}
        breadcrumb="Categories"
      />
      <Route
        path="/html"
        component={Html}
        breadcrumb="Categories > HTML"
        title="HTML"
        description="HTML, which stands for HyperText Markup Language, is the most basic building block of a webpage and used for creating and visually representing a webpage. It determines the content of a webpage, but not its functionality."
      />
      <Route
        path="/html/markup-language"
        component={Term}
        topic="Markup Language"
        breadcrumb="Categories > HTML > Markup Language"
        definition="Markup language is a computer language that uses tags to define elements within a document. It is human-readable, meaning markup files contain standard words, rather than typical programming syntax."
      />
      {/* <Route path="/css" component={Term} topic="CSS" />
      <Route path="/javascript" component={Term} topic="JavaScript" />
      <Route path="/node" component={Term} topic="Node JS" />
      <Route path="/react" component={Term} topic="React JS" /> */}
      {/*Route goes here for each term view*/}
    </Router>
  </Provider>
, document.getElementById('app'))
