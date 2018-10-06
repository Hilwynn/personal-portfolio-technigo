import React, { Component } from "react"
import "./style.css"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Anna Erkers</p>
        <p>
          <a
            href="https://github.com/Hilwynn"
            rel="noopener noreferrer"
            target="_blank">
            GitHub
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.linkedin.com/in/anna-erkers-868738118/"
            rel="noopener noreferrer"
            target="_blank">
            LinkedIn
          </a>
          <br />
          anna.erkers@gmail.com
          <br />
          <a
            href="tel:+4670-228-94-77"
            rel="nofollow">
            +4670 - 228 94 77
          </a>
        </p>
      </footer>
    )
  }
}

export default Footer
