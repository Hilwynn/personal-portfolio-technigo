import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class CasePreview extends Component {
  render() {
    const {
      image,
      preview,
      url
    } = this.props

    return (
      <Link to={`/case/${url}`} className="case-card">
        <article>
          <img src={`/images/cases/${image}`} alt={preview} />
          <h3 className="centered">{preview}</h3>
        </article>
      </Link>
    )
  }
}
