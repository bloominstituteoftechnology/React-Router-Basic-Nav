import React from 'react';

const SingleFriend = props => {
    return <h4>Hi there my name is {props.match.params.name}</h4>
}
 
export default SingleFriend;