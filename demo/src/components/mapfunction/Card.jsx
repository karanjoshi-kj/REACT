import React from 'react'

const Card = () => {
    const project = [
        {
        image : "https://res.cloudinary.com/dafwtuvrd/image/upload/v1766646173/d9e34983-e718-4f50-9fb4-398feb05a545_nu3mtd.jpg",
        tag : "NEFSH",
        tagline : "KJSD",
        description : "SOFTWARE ENGINNER",
        developer : "FF",
        livelink : "",
        githublink : ""
    },
];
//MAP FUNCTION RETURNS A SINGLE VALUE , SO WE SHOULD WRAP IT IN A PARENT DIV .
  return (
    <div className="container">
        {project.map((abc)=>(
            <div>    
            <img src={abc.image} alt={abc.tagline} />
            <span className="tag">{abc.tag}</span>
             <h2>{abc.tagline}</h2>
             <p>{abc.description}</p>
             <h3>{abc.developer}</h3>
             <a href={abc.livelink} target="_blank" rel="notfound">LIVE HOSTING</a>
             <a href={abc.githublink} target="_blank" rel="notfound">GITHUB LINK</a>
        </div>     
        ))}
    </div>     
  )
}

export default Card
