import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({name : 'helloWorld', email : 'h@gmail.com'})
    const handleAddUser = event => {
        event.preventDefault();
        console.log(user)
    }

    const handleOnBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser)
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
                <input onBlur={handleOnBlur}  type="email" name="email" />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;