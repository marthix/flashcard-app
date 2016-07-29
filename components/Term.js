import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import store from './_ReduxStore'

class Term extends Component {
  onClick() {
    // Redirect back to list route
  }

  render() {
    // Add description, and make this look way better
    // onClick redirect them to /
    return <h1>{this.props.route.topic}</h1>
  }
}


const mapStateToProps = function(store) {
  return {
    // props go on left, state goes on right
    score: store.termState.score,
  }
}
export default connect(mapStateToProps)(Term)
