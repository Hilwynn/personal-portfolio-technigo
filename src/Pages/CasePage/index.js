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
      <main>
        <nav className="navigation">
          <Link to="/">&larr; Back</Link>
        </nav>
        <section className="case">
          <h1>{project.title}.</h1>

          <img src={`/images/cases/${project.image}`} alt={`Screenshot of ${project.title}`} />

          <div className="intro">
            <p>{project.description}</p>
          </div>
          <p>See it live</p>
          <p>View code</p>

          <div className="tech-container">
            <div className="tech-background-bottom" />
            <div className="tech-background-top" />
            <h2>Tech.</h2>
            <div className="tech-list-wrapper">
              <div className="tech-list">
                <h3>
                  Code
                </h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript ES6</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="tech-list">
                <h3>
                  Toolbox
                </h3>
                <ul>
                  <li>Atom</li>
                  <li>GitHub</li>
                  <li>Terminal</li>
                  <li>Slack</li>
                </ul>
              </div>
              <div className="tech-list">
                <h3>
                  More
                </h3>
                <ul>
                  <li>Concept development</li>
                  <li>Agile methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
