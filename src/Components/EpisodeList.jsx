/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Episode from "./Episode";

const EpisodeList = ({ episodes }) => {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.id}>
          <Episode episode={episode} />
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
