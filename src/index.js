import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import "./index.css"


function Home() {
    return (
        <div>
            <h1>Home Component</h1>
            <p id="paragraph">This is the Home Component</p>
            </div>
    );
}
function About() {
    return (
        <div>
            <h1>About Component</h1>
            <p id="paragraph">This is the About Component</p>
            </div>
    )
}
function Products(props) {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/products/movies" activeClassName="navlink--active">
                    Movies
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="navlink--active">
                        Music
                        </NavLink>
                        </li>
                        </ul>
                        </div>
    );
}

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="navlink--active"exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="navlink--active">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeClassName="navlink--active">Products</NavLink>
                            </li>
                            </ul>

            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            </div>
    </ Router>,
    document.getElementById('root'));
