import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled.div`
    display : flex;
    flex-direction : column;
    font-size : 20px;
    font-weight : bold;
    color : #1ab188;
`;


const Navigation = () => {
  return (
    <div>
      <div className="App">

        <h1>React Router Mini</h1>
        <LinkWrapper >
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
        </LinkWrapper>

        { /*<div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">About</a>
        </div>
        <div>
          <a href="">Contact</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navigation;
