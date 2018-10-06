import React, { Component } from "react"
import LandingPage from "./Pages/LandingPage"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>.</header>
        <div className="page-container">
          <LandingPage />
        </div>
        <footer><h1>Yes this is footer</h1></footer>
      </div>
    )
  }
}

export default App
