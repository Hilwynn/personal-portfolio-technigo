import React, { Component } from "react"
import Button from "../../Components/Button"
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
          <div className="about-me-left">
            <div className="about-me-image">
              <img src="/images/portrait.png" alt="Anna Erkers" />
            </div>
            <p className="contact">
              anna.erkers@gmail.com
              <br />
              +4670 - 228 94 77
            </p>
          </div>
          <div className="about-me-right">
            <h2>
              Frontend Developer <br />
              + Translator
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="buttons">
              <Button linkTarget="https://github.com/Hilwynn" linkName="View my Github" />
              <Button
                linkTarget="#"
                linkName="View my LinkedIn" />
            </div>
          </div>
        </section>

        <section className="container tech">
          <h2>Tech.</h2>
          <p>
            200+ hours of coding &#9679;
            15 individual tasks &#9679;
            HTML5, CSS3, Flexbox, JavaScript, ES6, JSX, React, APIs
            &#9679; 2 sprints with demos at Volumental and Bonnier News
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
              <h3 className="centered">Technigo Yearbook using HTML5 and CSS using Flexbox</h3>
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
