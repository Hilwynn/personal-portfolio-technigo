import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class CasePage extends Component {
  state = {
    project: {}
  }

  componentDidMount() {
    const { path } = this.props.match.params
    const apiUrl = `/json/${path}.json`
    fetch(apiUrl).then(response => response.json()).then(json => {
      this.setState({
        project: json
      })
    })
  }

  render() {
    const { project } = this.state
    console.log(project)

    return (
      <div>
        <Link to="/">&larr; Back</Link>
        <p>{project.title}</p>

      </div>
    )
  }
}
