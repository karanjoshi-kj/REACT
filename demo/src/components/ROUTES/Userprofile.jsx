import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Userprofile = () => {
    const { id } = useParams();

    return (
        <div>
            <Link to="/">BACK TO HOME</Link>
            <h1>YHA ID PRINT KAR DE H: {id}</h1>
        </div>
    );
};

export default Userprofile;