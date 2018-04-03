import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link className="links" to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link className="links" to="/About">About</Link>
        </NavItem>
        <NavItem>
          <Link className="links" to="/Contact">Contact</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;