import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  // wrap with router
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
