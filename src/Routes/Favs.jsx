import React from "react";
import Card from "../Components/Card";

const Favs = () => {
  const favorites = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <div className="favs-page">z
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
          ))
        ) : (
          <p>No favorites added yet</p>
        )}
      </div>
    </div>
  );
};

export default Favs;