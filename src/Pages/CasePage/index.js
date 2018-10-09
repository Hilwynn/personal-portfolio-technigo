import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"

const casesJson = require("../../cases.json")

export default class CasePage extends Component {

  render() {
    const { path } = this.props.match.params
    let project = {}
    casesJson.cases.forEach(item => {
      if (item.urls.site === path) {
        project = item
      }
    })

    return (
      <div>
        <Link to="/">&larr; Back</Link>
        <p>{project.title}</p>

      </div>
    )
  }
}
