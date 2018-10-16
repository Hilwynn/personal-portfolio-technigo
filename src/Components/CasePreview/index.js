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
        <article className="case-card-inner">
          <div className="case-title">
            <h3>{title}</h3>
          </div>
          <div className="case-image">
            <img src={`${process.env.PUBLIC_URL}/images/cases/${image}`} alt={title} />
          </div>
        </article>
      </Link>
    )
  }
}
