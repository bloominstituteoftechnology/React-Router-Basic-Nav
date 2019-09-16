import React from "react";
// import link
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>

        {/* home tab */}
        <div>
          <Link className="home" to="/Home">
            Home
          </Link>
        </div>
        {/* about tab */}
        <div>
          <Link className="about" to="/About">
            About
          </Link>
        </div>
        {/* contact tab */}
        <div>
          <Link className="contact" to="/Contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
