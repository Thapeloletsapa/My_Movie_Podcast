/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Podcast from "./Podcast";

const PodcastList = ({ podcasts }) => {
  return (
    <ul>
      {podcasts.map((podcast) => (
        <li key={podcast.id}>
          <Podcast podcast={podcast} />
        </li>
      ))}
    </ul>
  );
};

export default PodcastList;
