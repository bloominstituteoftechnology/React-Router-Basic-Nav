import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";
import styled from "styled-components"
import { ThemeProvider } from "styled-components";

const App = () => (
  <div>
    
      <Navigation theme={{color:"color: blue"}}/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    
  </div>
);

export default App;

const color = {
  mainColor: "#D9491D",
  sideColorLight1: '#F4F4F4',
  sideColorLight2: '#7F8489',
  sideColorDark1: '#3D3D3B',
  sideColorDark2: '#525F7F'
}

const theme = {
  navTheme: `
  color: ${color.sideColorLight1};
  background: ${color.mainColor};
  h1{
    color:${color.sideColorDark1};
  }

  border-bottom: 2px solid ${color.sideColorDark2};
  `,

  testTheme: `red`
} 
