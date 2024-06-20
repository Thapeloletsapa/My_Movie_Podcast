/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { styled } from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setHomePageDisplayedPodcasts,
  setSorting,
  setSearchInput,
} from '../globalState/reducers/podcastsReducer';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #242424;
  padding: 0.5rem;
  gap: 1rem
  width: 95vw;
  margin: 0.15rem auto;
  border-radius: 0.25rem
  
`;
const Select = styled.select`
  width: 5rem;
  font-size: 0.7rem;
`;
const Input = styled.input`
  font-size: 0.7rem;
`;
const LogInButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.2rem;
`;
const Button = styled.button`
  font-size: 0.7rem;
`;
const Navbar = (props) => {
    const { podcastArray, defaultArray, setDisplayAction } = props;
    const {
      allPodcasts,
      searchInput,
      homePageDisplayedPodcasts,
      sorting,
      isLoggedIn,
    } = useSelector((state) => state.podcastsReducer);
    const dispatch = useDispatch();
    const backToHome = () => {
      dispatch(setHomePageDisplayedPodcasts(allPodcasts));
    };
  
    const sortAlphabetically = (e) => {
      const value = e.target.value;
      const lowercase = podcastArray.map((item) => {
        return { ...item, title: item.title.toLowerCase() };
      });
  
      let sortedLowercase = lowercase.sort((a, b) => {
        if (value === 'ZA') {
          dispatch(setSorting('ZA'));
          return a.title > b.title ? -1 : 1;
        }
        if (value === 'AZ') {
          dispatch(setSorting('AZ'));
          return a.title > b.title ? 1 : -1;
        }
        if (value === 'ascendingDate') {
          dispatch(setSorting('ascendingDate'));
          return a.updated > b.updated ? 1 : -1;
        }
        if (value === 'decendingDate') {
          dispatch(setSorting('decendingDate'));
          return a.updated > b.updated ? -1 : 1;
        }
      });
      if (value === 'unsorted') {
        dispatch(setSorting('unsorted'));
        // sortedLowercase = allPodcasts;
        sortedLowercase = defaultArray;
      }
      dispatch(setDisplayAction(sortedLowercase));
      return sortedLowercase;
    };
    const searchPodcasts = (e) => {
      e.preventDefault();
      const value = e.target.value.toLowerCase();
  
      dispatch(setSearchInput(value));
      const filteredPodcasts = defaultArray.filter((item) => {
        return item.title.toLowerCase().includes(value);
      });
      // dispatch(setHomePageDisplayedPodcasts(filteredPodcasts));
      dispatch(setDisplayAction(filteredPodcasts));
    };
    return (
        <Nav>
          <img
            src="/public/Avioli's Podcast_transparent.png"
            alt="Podcast logo"
            onClick={backToHome}
            width="50px"
          />
    
          <p>
            <Select
              name="sorting"
              id="sorting"
              value={sorting}
              onChange={(e) => sortAlphabetically(e)}
            >
              <option value="unsorted"> -- unsorted --</option>
              <option value="AZ">a-z</option>
              <option value="ZA">z-a</option>
              <option value="decendingDate">newest-oldest</option>
              <option value="ascendingDate">oldest-newest</option>
            </Select>
          </p>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="text"
              name="searchInput"
              id="search"
              onChange={(e) => searchPodcasts(e)}
              value={searchInput}
              placeholder="Search"
            />
          </form>
    
          <LogInButtons>
            {!isLoggedIn && (
              <Link to="/signup">
                <Button>Signup</Button>
              </Link>
            )}
            <Link to="/login">
              <Button>{!isLoggedIn ? 'Login' : 'Logout'}</Button>
            </Link>
          </LogInButtons>
        </Nav>
      );
    };
    
    export default Navbar;
    