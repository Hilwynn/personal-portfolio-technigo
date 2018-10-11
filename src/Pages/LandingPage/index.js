import React, { Component } from "react"
import CasePreview from "../../Components/CasePreview"
import "./style.css"

const casesJson = require("../../cases.json")

export default class LandingPage extends Component {

  render() {
    return (
      <main className="wrapper">

        <header className="heading">
          <h1>
            <span className="pink">A</span>nna Erk<span className="purple">e</span>rs.
          </h1>
        </header>

        <section className="container about-me">
          <div className="about-me-background-bottom" />
          <div className="about-me-background-top" />
          <div className="about-me-left">
            <div className="about-me-image">
              <img src="%PUBLIC_URL%/images/portrait.png" alt="Anna Erkers" />
            </div>
          </div>
          <div className="about-me-right">
            <h2>
              Frontend Developer <br />
              + Translator
            </h2>
            <div className="about-me-bio">
              <p>
                Hello! I&apos;m a linguistics
                enthusiast with a knack for
                problem-solving and falling down google
                holes in search of everything from cool
                CSS tricks to Warcraft lore.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna
                aliqua. Duis at tellus at urna
                condimentum.
              </p>
            </div>
            <div className="about-me-contact">
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
            </div>
          </div>
        </section>

        <section className="container tech">
          <h2>Tech.</h2>
          <p>
            200+ hours of coding
            <span className="bullet pink">&#9679;</span>
            15 individual tasks
            <span className="bullet pink">&#9679;</span>
            HTML5, CSS3, Flexbox, JavaScript, ES6, JSX, React, APIs
            <span className="bullet pink">&#9679;</span>
            3 sprints with demos at Volumental, Bonnier News and Comprend
          </p>
          <div className="cases">
            {casesJson.cases.map(project =>
              <CasePreview
                image={project.image}
                key={project.key}
                title={project.title}
                url={project.urls.site} />)}
          </div>
        </section>

        <section className="container skills">
          <div className="skills-background-bottom" />
          <div className="skills-background-top" />
          <h2>Skills.</h2>
          <div className="skill-list-wrapper">
            <div className="skill-list">
              <h3>
                Coding
              </h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>SASS</li>
              </ul>
              <h3>
                Upcoming
              </h3>
              <ul>
                <li>Node.js</li>
                <li>Redux</li>
                <li>Grid</li>
                <li>anime.js</li>
              </ul>
            </div>
            <div className="skill-list">
              <h3>
                Toolbox
              </h3>
              <ul>
                <li>Atom</li>
                <li>GitHub</li>
                <li>Terminal</li>
                <li>Postman</li>
                <li>Slack</li>
                <li>Trello</li>
              </ul>
            </div>
            <div className="skill-list">
              <h3>
                More
              </h3>
              <ul>
                <li>Concept development</li>
                <li>Agile methodology</li>
                <li>Translation</li>
                <li>Proof-reading</li>
                <li>Text-production</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container studies">
          <h2>Studies.</h2>
          <p>Yes hello I used to do linguistics stuff</p>
        </section>

      </main>
    )
  }
}
