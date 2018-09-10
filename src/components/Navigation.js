import React from 'react';
import {Link} from 'react-router-dom';
import { Home, About, Contact } from './';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/" component={Home}>Home</Link>
        </div>
        <div>
          {/* <a href="">About</a> */}
          <Link to="/about" component={About}>About</Link>
        </div>
        <div>
          {/* <a href="">Contact</a> */}
          <Link to="/contact" component={Contact}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
