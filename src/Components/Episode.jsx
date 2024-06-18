/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";

function Episode({ episode }) {
  return (
    <div>
      <h2>{episode.title}</h2>
      <p>File: {episode.file}</p>
      <button onClick={() => handleFavourite(episode.id)}>Favourite</button>
    </div>
  );
}

export default Episode;
