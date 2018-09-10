import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledSpan = styled.span`
	margin: 10px;
	padding: 5px;

	& > a {
		&:hover {
			color: green;
		}
	}
`;

const Navigation = () => {
	const path = window.location.pathname;

	const selectedLinkStyle = {
		border: '1px solid black',
		borderRadius: '5px',
	}
	
	return (
		<div>
			<div className="App">
				<h1>React Router Mini</h1>

				<StyledSpan style = { path === '/' ? selectedLinkStyle : null }>
					<Link to = '/'>Home</Link>
				</StyledSpan>

				<StyledSpan style = { path === '/about' ? selectedLinkStyle : null }>
					<Link to = '/about'>About</Link>	
				</StyledSpan>

				<StyledSpan style = { path === '/contact' ? selectedLinkStyle : null }>
					<Link to = '/contact'>Contact</Link>
				</StyledSpan>
			</div>
		</div>
	);
};

export default Navigation;
