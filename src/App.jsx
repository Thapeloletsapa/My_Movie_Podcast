/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { getPodcasts, getPodcast, getGenre } from "./api";
import PodcastList from "./Components/PodcastList";
import Podcast from "./Podcast";
import EpisodeList from "./EpisodeList";
import Episode from "./Episode";
import AudioPlayer from "./AudioPlayer";
import Favourites from "./Favourites";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState({});

  useEffect(() => {
    getPodcasts().then((response) => {
      setPodcasts(response.data);
      setLoading(false);
    });
  }, []);

  const handleFavourite = (episodeId) => {
    setFavourites((prevFavourites) => ({
      ...prevFavourites,
      [episodeId]: true,
    }));
  };

  const handleUnfavourite = (episodeId) => {
    setFavourites((prevFavourites) => ({
      ...prevFavourites,
      [episodeId]: false,
    }));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <PodcastList podcasts={podcasts} />
          <Favourites favourites={favourites} />
          <AudioPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
