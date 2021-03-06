import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import store from './_ReduxStore'

class Link extends Component {
  render() {
    // Add description, and make this look way better
    // onClick redirect them to /
    return <a className="breadcrumb" onClick={() => browserHistory.push(this.props.route)}>{this.props.children}</a>

  }
}


const mapStateToProps = function(store) {
  return {
    // props go on left, state goes on right
    score: store.termState.score,
  }
}
export default connect(mapStateToProps)(Link)
