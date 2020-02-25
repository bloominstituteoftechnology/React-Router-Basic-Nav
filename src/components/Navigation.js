import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          {/* Convert a to Links
          
              The syntax will look like this:
              ---Before
              <a href="/articles">Articles</a>
              ---After
              <Link to="/articles">Articles</Link>

          */}
          {/* <a href="">Home</a> */}
          <Link to="/Home">Home</Link>
        </div>
        <div>
          {/* <a href="">About</a> */}
          <Link to="/About">About</Link>
        </div>
        <div>
          {/* <a href="">Contact</a> */}
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
