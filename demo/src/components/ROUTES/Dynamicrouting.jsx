import React from 'react';
import { Link } from 'react-router-dom';

const Dynamicrouting = () => {
    // Array yahan component ke andar ya bahar declare kar sakte hain
    const users = [
        { id: 1, name: "karan" },
        { id: 2, name: "bhawesh" },
        { id: 3, name: "anushka" },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>USER LIST</h2>
            <ul>
                {users.map((u) => (
                    // yahan key={u.id} hoga
                    <li key={u.id}>
                        <Link to={`/user/${u.id}`}>{u.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dynamicrouting;