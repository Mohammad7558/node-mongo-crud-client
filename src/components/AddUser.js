import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});


    const handleAddUser = event => {
        event.preventDefault();
        console.log(user)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User Added Successfully');
                    event.target.reset();
                }
            })
    }

    const handleOnBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h1>Please Add User : </h1>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleOnBlur} type="text" name="name" />
                <br />
                <input onBlur={handleOnBlur} type="text" name="address" />
                <br />
                <input onBlur={handleOnBlur} type="text" name="phone" />
                <br />
                <input onBlur={handleOnBlur} type="email" name="email" />
                <br />
                <button type="submit">Add User</button>
            </form>
            <div>
                
            </div>
        </div>
    );
};

export default AddUser;