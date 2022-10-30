import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Uptade = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);


    const handleUptadeUser = event => {
        event.preventDefault();
        console.log(user);

        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    const handleChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>{storedUser.email}</h2>
            <form onSubmit={handleUptadeUser}>
                <input onBlur={handleChange} defaultValue={storedUser.name} type="text" name="name" />
                <br />
                <input onBlur={handleChange} defaultValue={storedUser.address} type="text" name="address" />
                <br />
                <input onBlur={handleChange} defaultValue={storedUser.phone} type="text" name="phone" />
                <br />
                <input onBlur={handleChange} defaultValue={storedUser.email} type="email" name="email" />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default Uptade;