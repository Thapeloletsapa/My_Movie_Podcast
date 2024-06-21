/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// Import necessary dependencies
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import routes
import {
  Home,
  Signup,
  SinglePodcast,
  Login,
  Favourites,
  PageNotFound,
} from "./pages";
import supabase from "./supabase/client";
// Import Redux dependencies
import { useSelector, useDispatch } from "react-redux";
import {
  setAllPodcasts,
  setIsLoading,
  setHomePageDisplayedPodcasts,
  setUserDataFromDB,
  setHasAccount,
  setFavourites,
  setSortSearchFavouritesArray,
} from "./globalState/reducers/podcastsReducer";

// Import styles
import "./styles.css";

// Define the App component
function App() {
  // Get favourites and favouriteSwitch from Redux state
  const { favourites, favouriteSwitch } = useSelector(
    (state) => state.podcastsReducer
  );

  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Fetch podcasts on mount
  useEffect(() => {
    // Set isLoading to true
    dispatch(setIsLoading(true));

    // Fetch podcasts from API
    const fetchPodcasts = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const result = await response.json();

        // If result is successful, update Redux state
        if (result) {
          dispatch(setHomePageDisplayedPodcasts(result));
          dispatch(setAllPodcasts(result));
          dispatch(setIsLoading(false));
        } else {
          console.log("Error fetching podcasts");
        }
      } catch (error) {
        console.log("Error fetching podcasts:", error);
      }
    };
    fetchPodcasts();
  }, []);

  // Fetch login data on mount
  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const { data, error } = await supabase.from("user_login_data").select();

        // If data is available, update Redux state
        if (data && data.length !== 0) {
          dispatch(setUserDataFromDB(data));
          dispatch(setHasAccount(true));
        }
      } catch (error) {
        console.log("Error fetching login data:", error);
      }
    };
    fetchLoginData();
  }, []);

  // Fetch favourites from DB on mount and when favouriteSwitch changes
  useEffect(() => {
    const fetchFavouritesFromDB = async () => {
      try {
        const { data, error } = await supabase.from("userFavourites").select();

        // If data is available, update Redux state
        if (data) {
          dispatch(setFavourites(data));
        }
      } catch (error) {
        console.log("Error fetching favourites:", error);
      }
    };
    fetchFavouritesFromDB();
  }, [favouriteSwitch]);

  // Render the app
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/podcast/:id" element={<SinglePodcast />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
