import React from "react";
import "./App.css";
import { Home, About, Contact, Header } from "./components";
import { Route } from "react-router-dom";

const App = () => (
  <div className="App">
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;
