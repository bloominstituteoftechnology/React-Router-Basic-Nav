import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    {/* exact attribute is very important here because the '/' is
    shared by every route path. Without 'exact' React will render EVERY 
    component on the path (nested routing) which is typically what we want,
    but in this case the root directory ('/') will mean that <Home/> will 
    manifest along with every other component that is shares a path with, 
    since every other route path has "/" in it. To stop this from happening
    we instruct react to render <Home/> only on it's EXACT path. */}
    <Route path="/about/" component={About} />
    <Route path="/contact/" component={Contact} />

  </div>
);

export default App;
