import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class CasePreview extends Component {
  render() {
    const {
      image,
      title,
      url
    } = this.props

    return (
      <Link to={`/case/${url}`} className="case-card">
        <article>
          <img src={`${process.env.PUBLIC_URL}/images/cases/${image}`} alt={title} />
          <h3 className="centered">{title}</h3>
        </article>
      </Link>
    )
  }
}
