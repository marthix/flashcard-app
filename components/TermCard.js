import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import store from './_ReduxStore'

class TermCard extends Component {
  render() {
    var imgStyle = {
      background: `url('../images/${this.props.image}') no-repeat #edf1f4`,
      backgroundPosition: "80% 20%",
      backgroundSize: "40%",
    }

    return <div className="card-square mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
      <div className="mdl-card__title mdl-card--expand" style={imgStyle}>
        <h2 className="mdl-card__title-text">{this.props.title}</h2>
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="javascript:;" onClick={() => browserHistory.push(this.props.route)}>
          {this.props.text}
        </a>
      </div>
    </div>

  }
}

export default TermCard
