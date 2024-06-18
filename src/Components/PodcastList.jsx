/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Podcast from "./Podcast";

function PodcastList({ podcasts }) {
  return (
    <ul>
      {podcasts &&
        podcasts.map((podcast) => (
          <li key={podcast.id}>
            <h2>{podcast.title}</h2>
            <p>Updated: {podcast.updated}</p>
            <p>Seasons: {podcast.seasons ? podcast.seasons.length : 0}</p>
            <p>
              Genres:{" "}
              {podcast.genreIds &&
                podcast.genreIds.map((genreId) => genreTitles[genreId])}
            </p>
            <img src={podcast.image} alt={podcast.title} />
          </li>
        ))}
    </ul>
  );
}

export default PodcastList;
