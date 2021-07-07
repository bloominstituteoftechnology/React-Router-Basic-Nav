import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import { Home, About, Contact, Navigation } from './components/index';

// function Home(props) {
//   return <h1>Home</h1>;
// }
// function About(props) {
//   return <h1>About</h1>;
// }
// function Contact(props) {
//   return <h1>Contact</h1>
// }

function App() {
  return (
    <div>

      <Navigation />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>

    </div>
  );
}

export default App;
