import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
                
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </Router>

      </div>
    </div>
  );
};

export default Navigation;

// <div>
// <a href="">Home</a>
// </div>
// <div>
// <a href="">About</a>
// </div>
// <div>
// <a href="">Contact</a>
// </div>