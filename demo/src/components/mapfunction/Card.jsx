import React from 'react';
import './Card.css';

const Card = () => {
  const project = [
    {
      image: "https://res.cloudinary.com/dafwtuvrd/image/upload/v1766259319/IMG20251113153120_ascbkz.jpg",
    //   tag: "NEFSH",
      tagline: "KARAN JOSHI",
      description: "SOFTWARE ENGINEER",
      developer: "KARAN",
      livelink: "https://karanjoshi-ten.vercel.app/",
      githublink: "https://github.com/karanjoshi-kj"
    },
  ];

  return (
    <div className="card-container">
      {project.map((abc, index) => (
        <div key={index} className="project-card">
          <div className="card-image-wrapper">
            <img src={abc.image} alt={abc.tagline} className="card-image" />
            <span className="tag">{abc.tag}</span>
          </div>

          <div className="card-content">
            <h2 className="card-tagline">{abc.tagline}</h2>
            <p className="card-description">{abc.description}</p>
            <h3 className="card-developer">By {abc.developer}</h3>

            <div className="card-links">
              {abc.livelink ? (
                <a 
                  href={abc.livelink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-live"
                >
                  Live Demo
                </a>
              ) : (
                <span className="btn btn-disabled">No Live Link</span>
              )}

              <a 
                href={abc.githublink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;