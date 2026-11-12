import React from 'react';
import { useParams, Link } from 'react-router-dom';

const User1 = () => {
  const { usercode } = useParams();

  if (usercode === '001') {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>MY UserCode: {usercode}</h1>
        <h1>MY Name is Charanjeet</h1>
      </div>
    );
  } 
  else if (usercode === '002') {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>MY UserCode: {usercode}</h1>
        <h1>MY Name is Karan</h1>
      </div>
    );
  } 
  else {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>MY UserCode: {usercode}</h1>
        <h1>Invalid user not found</h1>
      </div>
    );
  }
}

export default User1;