import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import CasePage from "./Pages/CasePage"
import FourOhFourPage from "./Pages/FourOhFourPage"
import Footer from "./Components/Footer"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/case/:path" component={CasePage} />
            <Route component={FourOhFourPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}
