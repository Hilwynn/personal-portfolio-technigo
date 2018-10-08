import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class FourOhFourPage extends Component {
  render() {
    return (
      <Link to="/">
        404
      </Link>
    )
  }
}
