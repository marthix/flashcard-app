import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import store from './_ReduxStore'
import Link from './Link'

class Term extends Component {
  render() {
    return <div>
      <Link route="/html">{this.props.route.breadcrumb}</Link>
      <h1 className="term-title">{this.props.route.topic}</h1>
      <p className="score">Score: 0</p>
      <table className="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Please click the correct definition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">{this.props.route.definition}</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">2</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">3</td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}


const mapStateToProps = function(store) {
  return {
    // props go on left, state goes on right
    score: store.termState.score,
  }
}
export default connect(mapStateToProps)(Term)
