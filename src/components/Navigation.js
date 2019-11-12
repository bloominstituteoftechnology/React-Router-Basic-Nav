import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to='/'><a href="">Home</a></Link>
        </div>
        <div>
        <Link to='/About'><a href="">About</a></Link>
        </div>
        <div>
        <Link to='/Contact'><a href="">Contact</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
