import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link className="Nav-link" to="/">Home</Link>
        <Link className="Nav-link" to="/about">About</Link>
        <Link className="Nav-link" to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
