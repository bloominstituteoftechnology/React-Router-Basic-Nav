import React from 'react';
import { Link } from 'react-router-dom'

//Head over to your app and start navigating. You should be able to see your URLS changing 
//their paths as you go. Each path should display the proper component.

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
        <div>
          <Link to={'/about'}>About</Link>
        </div>
        <div>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
