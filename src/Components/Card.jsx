import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };
    const updatedFavs = [...favs, newFav];

    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{username}</p>
      <p>ID: {id}</p>
      <Link to={`/dentist/${id}`} className="details-link">View Details</Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
