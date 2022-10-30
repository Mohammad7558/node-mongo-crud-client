import React, { useState } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const displayUsers = useLoaderData();
    const [displayUser, setDisplayUser] = useState(displayUsers);

    const handleUser = user => {
        const agree = window.confirm(`Are You Sure to delete This user ${user.name}`);
        console.log(agree)
        if (agree) {
            // console.log(user._id)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = displayUser.filter(usr => usr._id !== user._id);
                        setDisplayUser(remaining);
                        alert('user has ben Deleted');
                    }
                })
        }
    }

    return (
        <div>
            <h1>User : {displayUser.length}</h1>
            {
                displayUser.map(user => <p key={user._id}>
                    {user.name}
                    {user.email}
                    <Link to={`/uptade/${user._id}`}>
                        <button >uptade</button>
                    </Link>
                    <button onClick={() => handleUser(user)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Home;