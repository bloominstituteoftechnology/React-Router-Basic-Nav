import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <Link to="/" className="Nav-link">
          Home
        </Link>
        <Link to="/about" className="Nav-link">
          About
        </Link>
        <Link to="/contact" className="Nav-link">
          Contact
        </Link>
      </Nav>
    </div>
  );
};
export default Navigation;
