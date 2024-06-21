/* eslint-disable no-unused-vars */
import React from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setHomePageDisplayedPodcasts,
  setSorting,
  setSearchInput,
} from "../globalState/reducers/podcastsReducer";

// Define a styled nav element
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #801818;
  padding: 0.5rem;
  gap: 1rem;
  width: 100%;
  margin: 0.15rem auto;
  border-radius: 0.25rem;
  box-shadow: 5px 8px 3px
  margin-bottom
`;

// Define a styled select element
const Select = styled.select`
  width: 5rem;
  font-size: 0.7rem;
`;

// Define a styled input element
const Input = styled.input`
  font-size: 0.9rem;
`;

// Define a styled div element for login buttons
const LogInButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.2rem;
`;

// Define a styled button element
const Button = styled.button`
  font-size: 2rem;
`;

const Navbar = () => {
  // Get the dispatch function from react-redux
  const dispatch = useDispatch();

  // Get the state from the podcastsReducer
  const {
    allPodcasts,
    searchInput,
    homePageDisplayedPodcasts,
    sorting,
    isLoggedIn,
  } = useSelector((state) => state.podcastsReducer);

  // Handle the back to home button click
  const handleBackToHome = () => {
    // Dispatch an action to set the home page displayed podcasts to all podcasts
    dispatch(setHomePageDisplayedPodcasts(allPodcasts));
  };

  // Handle the sort alphabetically select change
  const handleSortAlphabetically = (e) => {
    // Get the selected value
    const value = e.target.value;

    // Create a copy of the original array
    let sortedPodcasts = [...allPodcasts];

    // Sort the podcasts based on the selected value
    switch (value) {
      case "AZ":
        sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ZA":
        sortedPodcasts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "ascendingDate":
        sortedPodcasts.sort((a, b) => a.updated - b.updated);
        break;
      case "decendingDate":
        sortedPodcasts.sort((a, b) => b.updated - a.updated);
        break;
      default:
        // Reset to the original array
        sortedPodcasts = allPodcasts;
    }

    // Dispatch an action to set the sorting value and the home page displayed podcasts
    dispatch(setSorting(value));
    dispatch(setHomePageDisplayedPodcasts(sortedPodcasts));
  };

  // Handle the search input change
  const handleSearchPodcasts = (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Get the search input value
    const value = e.target.value.toLowerCase();

    // Dispatch an action to set the search input value
    dispatch(setSearchInput(value));

    // Filter the podcasts based on the search input value
    const filteredPodcasts = allPodcasts.filter((item) =>
      item.title.toLowerCase().includes(value)
    );

    // Dispatch an action to set the home page displayed podcasts to the filtered podcasts
    dispatch(setHomePageDisplayedPodcasts(filteredPodcasts));
  };

  return (
    <Nav>
      {/* Logo image with a click handler to go back to home */}
      <img
        src="/public/Avioli's Podcast_transparent.png"
        alt="Podcast logo"
        onClick={handleBackToHome}
        
        width="80px"
      />

      {/* Sorting select element */}
      <p>
        <Select
          name="sorting"
          id="sorting"
          value={sorting}
          onChange={handleSortAlphabetically}
        >
          <option value="unsorted">-- unsorted --</option>
          <option value="AZ">a-z</option>
          <option value="ZA">z-a</option>
          <option value="decendingDate">newest-oldest</option>
          <option value="ascendingDate">oldest-newest</option>
        </Select>
      </p>

      {/* Search input element */}
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          name="searchInput"
          id="search"
          onChange={handleSearchPodcasts}
          value={searchInput}
          placeholder="Search"
        />
      </form>

      {/* Login buttons */}
      <LogInButtons>
        {!isLoggedIn && (
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
        )}
        <Link to="/login">
          <Button>{!isLoggedIn ? "Login" : "Logout"}</Button>
        </Link>
      </LogInButtons>
    </Nav>
  );
};

export default Navbar;
