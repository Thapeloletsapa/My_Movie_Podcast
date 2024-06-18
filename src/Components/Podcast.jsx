/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EpisodeList from "./EpisodeList";

function Podcast({ podcast }) {
  return (
    <div>
      <h1>{podcast.title}</h1>
      <p>Updated: {podcast.updated}</p>
      <p>Seasons: {podcast.seasons.length}</p>
      <p>Genres: {podcast.genreIds.map((genreId) => genreTitles[genreId])}</p>
      <img src={podcast.image} alt={podcast.title} />
      <EpisodeList episodes={podcast.seasons[0].episodes} />
    </div>
  );
}

export default Podcast;
