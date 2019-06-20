import React from 'react';
import { Home, Contact, About } from '.';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
