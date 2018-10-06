import React, { Component } from "react"
import "./style.css"

class LandingPage extends Component {
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
              <img src="/images/portrait.png" alt="Anna Erkers" />
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
                new CSS tricks to Warcraft lore.
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
                <a
                  href="https://www.linkedin.com/in/anna-erkers-868738118/"
                  rel="noopener noreferrer"
                  target="_blank">
                  LinkedIn
                </a>
                <br />
                anna.erkers@gmail.com
                <br />
                +4670 - 228 94 77
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
            2 sprints with demos at Volumental and Bonnier News
          </p>
          <div className="cases">
            <article className="case-card">
              <img src="/images/cases/case-choicemaker.png" alt="" />
              <h3 className="centered">Random choice maker using HTML5, CSS3 and jQuery</h3>
            </article>
            <article className="case-card">
              <img src="/images/cases/case-clock.png" alt="" />
              <h3 className="centered">Simple clock built in React</h3>
            </article>
            <article className="case-card">
              <img src="/images/cases/case-newspaper.png" alt="" />
              <h3 className="centered">Newspaper layout using HTML5 and CSS3 using Flexbox</h3>
            </article>
            <article className="case-card">
              <img src="/images/cases/case-weatherapp.png" alt="" />
              <h3 className="centered">Weather app built in React using Open Weather API</h3>
            </article>
            <article className="case-card">
              <img src="/images/cases/case-accordion.png" alt="" />
              <h3 className="centered">Accordion using HTML5, CSS3 and ES6</h3>
            </article>
            <article className="case-card">
              <img src="/images/cases/case-yearbook.png" alt="" />
              <h3 className="centered">Technigo Yearbook using HTML5 and CSS3</h3>
            </article>
            <article className="case-card">
              <img src="/images/cases/case-form.png" alt="" />
              <h3 className="centered">Registration form using HTML5 and CSS3</h3>
            </article>
            <article className="case-card">
              <img src="/images/cases/case-productpage.png" alt="" />
              <h3 className="centered">Product page built in React using custom API</h3>
            </article>
          </div>
        </section>

        <section className="container skills">
          <h2>Skills.</h2>
          <p>Yes hello I kind of know some things</p>
        </section>

        <section className="container studies">
          <h2>Studies.</h2>
          <p>Yes hello I used to do linguistics stuff</p>
        </section>

      </main>
    )
  }
}

export default LandingPage
