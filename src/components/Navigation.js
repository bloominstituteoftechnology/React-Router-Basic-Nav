import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivNavBar = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: rgb(240, 240, 240);
  text-align: center;
  font-size: 48px;

  div {
    margin: 25px;
  }
`;

const Navigation = () => {
  return (
    <DivNavBar>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </DivNavBar>
  );
};

export default Navigation;
