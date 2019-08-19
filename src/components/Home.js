import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (   
<div>  
<h1>Home</h1>
<div>
<Link to="/">Home</Link>
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
export default Home;
