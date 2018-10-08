import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class FourOhFourPage extends Component {
  render() {
    return (
      <Link to="/" className="case-card">
        404
      </Link>
    )
  }
}
