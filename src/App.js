import React, { Component } from "react"
import LandingPage from "./Pages/LandingPage"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Maybe this is header?</h1>
        <div className="page-container">
          <LandingPage />
        </div>
        <h1>Yes this is footer</h1>
      </div>
    )
  }
}

export default App
