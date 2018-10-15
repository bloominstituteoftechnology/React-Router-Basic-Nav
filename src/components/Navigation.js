import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link className="home-link" to="/">
          Home
        </Link>
        <Link className="about-link" to="/about">
          About
        </Link>
        <Link className="contact-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

//  <div>
//           <a href="">Home</a>
//         </div>
//          <div>
//          <a href="">About</a>
//        </div>
//        <div>
//          <a href="">Contact</a>
//        </div>