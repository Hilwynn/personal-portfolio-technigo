import React, { Component } from "react"
import Button from "../../Components/Button"
import "./style.css"

class LandingPage extends Component {
  render() {
    return (
      <main className="container">
        
        <section className="about-me">
          <div className="about-me-left">
            <div className="about-me-image">
              <img src="/images/portrait.png" alt="Anna Erkers" />
            </div>
            <p className="contact">
              anna.erkers@gmail.com<br />
              +4670 - 228 94 77
            </p>
          </div>
          <div className="about-me-right">
            <p className="name">Anna Erkers</p>
            <h1>Frontend Developer</h1>
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
              culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
            <Button
              linkTarget="https://github.com/Hilwynn"
              linkName="See my Github" />
          </div>
        </section>

        <section className="tech">
          Yes hello this is stuff I&apos;ve done
        </section>

        <section className="skills">
          Yes hello I kind of know some things
        </section>

        <section className="studies">
          Yes hello I used to do linguistics stuff
        </section>

        <div className="bottom-link">
          <Button
            linkTarget="#"
            linkName="See my LinkedIn" />
        </div>

      </main>
    )
  }
}

export default LandingPage
