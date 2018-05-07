import React from 'react';

const myFriends = ['Henry', 'Melissa', 'Jacob', 'Kylie'];

const Friends = () => {
    return (
        <ul>
            {myFriends.map(friend => <li key={friend}>{friend}</li>)}
        </ul>)
}

export default Friends;