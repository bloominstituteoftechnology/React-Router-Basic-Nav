import React from 'react';
import { Link } from 'react-router-dom';
const myFriends = ['Henry', 'Melissa', 'Jacob', 'Kylie'];

const Friends = () => {
    return (
        <ul>
            {myFriends.map(friend => <Link to={`/friends/${friend}`} key={friend}>{friend}</Link>)}
        </ul>)
}

export default Friends;