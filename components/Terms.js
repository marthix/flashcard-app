import React, { Component } from 'react'
import { browserHistory } from 'react-router'

var Terms = (props) => <div>
  <ul>
    <li><a href="javascript:;" onClick={() => browserHistory.push('/var')}>Var</a></li>
  </ul>
</div>

export default Terms
