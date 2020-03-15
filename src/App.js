import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route, Redirect } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/contact">
      <Contact />
    </Route>
    <Redirect to="/" />
  </div>
);

export default App;
