import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <div className="App__header">
          <NavItem className="NavItem">
            <Link exact to="/" className="App--item">Home</Link>
          </NavItem>
          <NavItem className="NavItem">
            <Link exact to="/about" className="App--item">About</Link>
          </NavItem>
          <NavItem className="NavItem">
            <Link exact to="contact" className="App--item">Contact</Link>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
};

export default Navigation;