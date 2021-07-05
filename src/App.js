import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <div>
    <Navigation />
    <switch>
      <Route exart path='/'>
        <Home />
      </Route>
      <Route exact path='/About'>
        <About />
      </Route>
      <Route exact path='/Contact'>
        <Contact />
      </Route>
    </switch>
  </div>
);

export default App;
