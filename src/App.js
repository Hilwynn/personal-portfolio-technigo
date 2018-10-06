import React, { Component } from "react"
import LandingPage from "./Pages/LandingPage"
import Footer from "./Components/Footer"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>.</header>
        <div className="page-container">
          <LandingPage />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
