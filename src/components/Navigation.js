import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <NavItem>
          <Link to="/" className="Nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about" className="Nav-link">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" className="Nav-link">Contact</Link>
        </NavItem>
      </Nav>
      <h1>React Router Mini</h1>
    </div>
  );
};

export default Navigation;