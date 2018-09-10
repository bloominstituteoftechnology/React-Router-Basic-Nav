import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledSpan = styled.span`
	margin: 20px;

	& > a {
		&:hover {
			color: red;
		}
	}
`;

const Navigation = () => {
	const activeLinkStyle = {
		border: '1px solid black',
		borderRadius: '5px',
		padding: '5px',
	}
	
	return (
		<div>
			<div className="App">
				<h1>React Router Mini</h1>

				<StyledSpan>
					<NavLink 
						exact 
						to = '/' 
						activeStyle = {activeLinkStyle} 
					>Home</NavLink>
				</StyledSpan>

				<StyledSpan>
					<NavLink 
						exact 
						to = '/about' 
						activeStyle = {activeLinkStyle} 
					>About</NavLink>	
				</StyledSpan>

				<StyledSpan>
					<NavLink 
						exact 
						to = '/contact' 
						activeStyle = {activeLinkStyle} 
					>Contact</NavLink>
				</StyledSpan>
			</div>
		</div>
	);
};

export default Navigation;
