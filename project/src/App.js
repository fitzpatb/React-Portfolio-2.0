import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolios from "./pages/Portfolios";

function App() {
  return (
    <Router>
      <div id="page-container">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolios />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
