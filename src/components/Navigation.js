import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/About">About</Link>
        </div>
        <div>
          <Link to="Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

// instead of using <a>anchor tags</a> that will refresh the browser by submitting
// another request for another page to the server-side, we can do client-side
// routing by using <Link> components that link to other internal compenents instead of 
// external pages. This cuts down on costs because it takes workload off of the server 
// and offloads it onto the client (a la client-side routing) 

export default Navigation;
