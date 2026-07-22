import React from 'react';
import './Card.css';
import Card1 from './Card1';
import project from "./CardData.json"
const Card = () => {
  return (
    <div className="card-container">
      {project.map((abc) => (
        <Card1 abc={abc} />
      ))}
    </div>
  );
};

export default Card;