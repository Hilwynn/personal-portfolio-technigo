import React, { Component } from "react"
import "./style.css"

class Button extends Component {
  render() {
    return (
      <button>{this.props.linkName}</button>
    )
  }
}

export default Button
