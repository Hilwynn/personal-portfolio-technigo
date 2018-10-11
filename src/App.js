import React, { Component } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import CasePage from "./Pages/CasePage"
import FourOhFourPage from "./Pages/FourOhFourPage"
import Footer from "./Components/Footer"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="page-container">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/case/:path" component={CasePage} />
              <Route component={FourOhFourPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}
