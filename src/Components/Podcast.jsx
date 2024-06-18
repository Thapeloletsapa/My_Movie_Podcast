/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EpisodeList from "./EpisodeList";

const Podcast = ({ podcast }) => {
  return (
    <div>
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
      <img src={podcast.image} alt={podcast.title} />
      <p>Number of seasons: {podcast.seasons.length}</p>
      <p>Last updated: {podcast.updated}</p>
      <EpisodeList episodes={podcast.episodes} />
    </div>
  );
};

export default Podcast;
