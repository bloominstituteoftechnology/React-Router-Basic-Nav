import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink to="/" activeClassName='active--link' exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName='active--link'>About</NavLink>
                </li>
                <li> 
                    <NavLink to="/products" activeClassName='active--link'>Products</NavLink>
                </li>
            </ul>

            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
        </div>

</Router>

);


function About() {
    return (
        <div>
        <h1> App Component </h1>
        <p id = "paragraph"> App COmponent </p>
        </div>
        );
}
function Home() {
    return (
        <div>
        <h1> Home Component </h1>
        <p id = "paragraph"> Home COmponent </p>
        </div>
        );
}
function Products() {
    return (
        <div>
        <h1> Products Component </h1>
        <p id = "paragraph"> Product COmponent </p>
        </div>
        );
}

export default App;
