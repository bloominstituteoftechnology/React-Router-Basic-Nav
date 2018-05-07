import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

// const App = () => (
//   <div>
//     <Navigation />
//   </div>
// );

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router</h1>
        </header>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
      </div>
    );
  }
}

export default App;
