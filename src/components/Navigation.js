import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";


const Navigation = (props) => {
  console.log(props.theme.color)
  return (
    <NavContainer>
      <Navbar>
        <h1>React Router Mini</h1>
        <div>
          <StyledLink exact to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </div>
      </Navbar>
    </NavContainer>
  );
};

export default Navigation;


const color = {
  mainColor: "#D9491D",
  sideColorLight1: '#F4F4F4',
  sideColorLight2: '#7F8489',
  sideColorDark1: '#3D3D3B',
  sideColorDark2: '#525F7F'
}

const theme = {
  navTheme: `
  a{
   color: ${color.sideColorLight1};    
   
   &.active{
     
     font-weight: bold; 
     text-decoration: none
   }  
  }
  a:hover {
    color: ${color.sideColorDark2};
    text-decoration: none
  } 

  background: ${color.mainColor}
  h1{
    color:${color.sideColorDark1};
    font-size: 32px;
  }

  border-bottom: 2px solid ${color.sideColorDark2};
  `,
} 


const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  margin: auto;  
`;

const NavContainer = styled.div`    
    ${theme.navTheme ? theme.navTheme:'color: green'};
  `

const StyledLink = styled(NavLink)`
  margin: 0 5%;
  text-decoration: none
`;
