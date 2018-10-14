import React, { Component } from "react"
import { Link } from "react-router-dom"
import ListItem from "../../Components/ListItem"
import "./style.css"

const casesJson = require("../../cases.json")

export default class CasePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

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

          <img src={`${process.env.PUBLIC_URL}/images/cases/${project.image}`} alt={`Screenshot of ${project.title}`} />

          <div className="intro">
            <p>{project.description}</p>
          </div>

          <div className="tech-container">
            <h2>Tech Specs.</h2>
            <div className="tech-list-wrapper">
              <div className="tech-list">
                <h3>
                  Code
                </h3>
                <ul>
                  {project.code.map(item =>
                    <ListItem key={item} item={item} />)}
                </ul>
              </div>
              <div className="tech-list">
                <h3>
                  Toolbox
                </h3>
                <ul>
                  {project.toolbox.map(item =>
                    <ListItem key={item} item={item} />)}
                </ul>
              </div>
              <div className="tech-list">
                <h3>
                  More
                </h3>
                <ul>
                  {project.more.map(item =>
                    <ListItem key={item} item={item} />)}
                </ul>
              </div>
            </div>
          </div>

          <div className="link-icons">
            <a
              href={project.urls.live}
              rel="noopener noreferrer"
              target="_blank"
              title="See it live">
              <i className="fas fa-desktop" />
            </a>
            <a
              href={project.urls.code}
              rel="noopener noreferrer"
              target="_blank"
              title="See the code on GitHub">
              <i className="fab fa-github" />
            </a>
          </div>

        </section>
      </main>
    )
  }
}
