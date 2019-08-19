import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
return (
<div> 
<h1>Contact</h1>
<div>
<Link to="/Home">Home</Link>
</div>
<div>
<Link to="/About">About</Link>
</div>
<div>
<Link to="/Contact">Contact</Link>
</div>
</div>
);
}
export default Contact;
