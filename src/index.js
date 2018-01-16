import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

function Home(props) {
	return (
		<div className="View">
			<h1>Home Comp</h1>
			<p>This is the home comp</p>
		</div>
	)
}

function About(props) {
	return (
		<div className="View">
			<h1>About Comp</h1>
			<p>This is the about comp</p>
		</div>
	)
}

function Products(props) {
	// console.log('products props')
	// console.log(props);
	return (
		<div className="View">
			<ProductsNavBar />

			<p>This is the products home page</p>
		</div>
	)
}

function ProductsNavBar(props) {
	return (
		<div>
			<ul className="NavHeader">
				<li className="NavLink">
					<NavLink exact to="/movies" className="NavLink--title" activeClassName="NavLink--selected">
							Movies
					</NavLink>
				</li>
				<li className="NavLink">
					<NavLink exact to="/music" className="NavLink--title" activeClassName="NavLink--selected">
						Music
					</NavLink>
				</li>
				<li className="NavLink">
					<NavLink exact to="/books" className="NavLink--title" activeClassName="NavLink--selected">
						Books
					</NavLink>
				</li>
			</ul>

			<hr />
		</div>
	)	
}

function Movies(props) {
	// console.log('movies')
	// console.log(props)
	return (
		<div className="View">
			<ProductsNavBar />

			<h1>Movies</h1>
			<p>This is the movies comp</p>
		</div>
	)
}

function Music(props) {
	return (
		<div className="View">
			<ProductsNavBar />

			<h1>Music</h1>
			<p>This is the music comp</p>
		</div>
	)
}

function Books(props) {
	return (
		<div className="View">
			<ProductsNavBar />

			<h1>Books</h1>
			<p>This is the books comp</p>
		</div>
	)
}


ReactDOM.render(
	<Router>
		<div>
			<ul className="NavHeader">
				<li className="NavLink">
					<NavLink exact to="/" className="NavLink--title" activeClassName="NavLink--selected">
							Home
					</NavLink>
				</li>
				<li className="NavLink">
					<NavLink to="/about" className="NavLink--title" activeClassName="NavLink--selected">
						About
					</NavLink>
				</li>
				<li className="NavLink">
					<NavLink to="/products" className="NavLink--title" activeClassName="NavLink--selected">
						Products
					</NavLink>
				</li>
			</ul>

			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/products" component={Products} />
			<Route path="/movies" component={Movies} />
			<Route path="/music" component={Music} />
			<Route path="/books" component={Books} />
		</div>
	</Router>,
	document.getElementById('root')
);

/*
ReactDOM.render(
	<Router>
		<div>
			<App />

			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
		</div>
	</Router>,
	document.getElementById('root')
);
*/
// registerServiceWorker();
