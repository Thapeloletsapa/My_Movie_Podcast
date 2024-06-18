/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { getShows, getShow, getGenre } from "./api";
import PodcastList from "./Components/PodcastList";
import Podcast from "./Components/Podcast";
import EpisodeList from "./Components/EpisodeList";
import Episode from "./Components/Episode";
import AudioPlayer from "./Components/AudioPlayer";
import Favourites from "./Components/Favourites";

function App() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState({});

  useEffect(() => {
    getShows().then((response) => {
      setShows(response.data);
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
          <PodcastList podcasts={shows} />
          <Favourites favourites={favourites} />
          <AudioPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
