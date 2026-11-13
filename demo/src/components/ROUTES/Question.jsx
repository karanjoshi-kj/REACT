import React from 'react';
import Dummydata from './Dummydata.json';
import { useParams, Link } from 'react-router-dom';

const Question = () => {
    const { id } = useParams();

    const userList = Dummydata.users;

    return (
        <div>
            <Link to="/">Back to Home</Link>
            <hr />

            <h2>User Details:</h2>

            {userList.map((item) => {
                if (String(item.id) === String(id)) {
                    return (
                        <div key={item.id}>
                            <h3>User ID: {item.id}</h3>
                            <p><h1>Name:</h1> {item.firstName} {item.lastName}</p>
                            <p><h1>Email:</h1> {item.email}</p>
                            <p><h1>Username:</h1> {item.username}</p>
                            <p><h1>Age:</h1> {item.age}</p>
                        </div>
                    );
                }
                return null; 
            })}
        </div>
    );
};

export default Question;