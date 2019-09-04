import React from 'react';

const About = (props) => {
    console.log('About', props);
return (
 <h1>
     About 
    {/*{props.match.params.id} */}
    {/* <button onClick={() => {
        console.log('Button is Clicked');
        props.history.push('/');
    }}>Navigate to Home</button> */}
 </h1>
  );
};

export default About;

// have about/:id in App.js for props.match, etc to work.

// <button OnClick={() => {
//     console.log('We Clicked Back');
//     props.history.goBack();
// }}>Go Back</button>