import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import TermCard from './TermCard'
import Link from './Link'

var Html = (props) => <div>
  <Link route="/">{props.route.breadcrumb}</Link>
  <h3>{props.route.title}</h3>
  <p>{props.route.description}</p>
  <div className="mdl-grid">
    <TermCard title="Markup Language" image="" route="/html/markup-language" text="View Definition"/>
    <TermCard title="Document" image="" route="/html/document" text="View Definition"/>
    <TermCard title="Children" image="" route="/html/children" text="View Definition"/>
    <TermCard title="Browser" image="" route="/html/browser" text="View Definition"/>
  </div>
</div>

export default Html
