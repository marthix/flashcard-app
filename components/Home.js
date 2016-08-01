import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import TermCard from './TermCard'

var Home = (props) => <div>
  <p>{props.route.breadcrumb}</p>
  <div className="mdl-grid">
    <TermCard title="HTML" image="html.png" route="/html" text="View Category"/>
    <TermCard title="CSS" image="css.png" route="/css" text="View Category"/>
    <TermCard title="JavaScript" image="javascript.png" route="/javascript" text="View Category"/>
    <TermCard title="Node" image="node.png" route="/node" text="View Category"/>
    <TermCard title="React" image="react.png" route="/react" text="View Category"/>
  </div>
</div>

export default Home
