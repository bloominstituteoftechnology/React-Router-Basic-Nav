import React from "react";
// import link
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      {/* home tab */}
      <div>
        <Link className="home" to="/">
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
    
  );
};
export default Home;
