import React from 'react';
//Inside of Navigation.js import { Link } from 'react-router-dom'.
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<div className="App">
				<h1>React Router Mini</h1>
				<div>
					{/* /Declare the to as the href on <Link> and specify the correct routes for your app to navigate towards. */}
					<Link to="/">Home</Link>
				</div>
				<div>
					<Link to="/about">About</Link>
				</div>
				<div>
					<Link to="/contact">Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
