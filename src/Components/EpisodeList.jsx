/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Episode from "./Episode";

function EpisodeList({ episodes }) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.id}>
          <h3>{episode.title}</h3>
          <p>File: {episode.file}</p>
          <button onClick={() => handleFavourite(episode.id)}>Favourite</button>
        </li>
      ))}
    </ul>
  );
}

export default EpisodeList;
