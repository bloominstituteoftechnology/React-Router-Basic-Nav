import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          {/* <a href="">Home</a> */}
          {/* Don't forget, that THESE to Attrs need to match a path you've previously declared in your <Route /> */}
          <Link to="/">Home</Link>
        </div>
        <div>
          {/* <a href="">About</a> */}
          <Link to="/about">About</Link>
        </div>
        <div>
          {/* <a href="">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
