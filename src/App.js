import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <div>
    <Navigation />
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contacts" component={Contact} />
  </div>
);

export default App;
