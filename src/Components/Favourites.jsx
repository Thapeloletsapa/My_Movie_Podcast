/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Favourites({ favourites }) {
  return (
    <div>
      <h2>Favourites</h2>
      <ul>
        {Object.keys(favourites).map((episodeId) => (
          <li key={episodeId}>
            <Episode episode={favourites[episodeId]} />
            <button onClick={() => handleUnfavourite(episodeId)}>
              Unfavourite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favourites;
