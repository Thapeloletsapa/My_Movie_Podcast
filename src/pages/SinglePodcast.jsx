/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Seasons from '../components/Seasons';
import { Link } from 'react-router-dom';
import { Navbar } from '../components';


const SinglePodcastContainer = styled.section`
  padding: 0.5rem 0.5rem;
`;
const Header = styled.div`
  background-color: #242424;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;
const Image = styled.img`
  width: 7rem;
`;
const PodcastDetails = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;
const PodcastTitle = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
const PodcastDescription = styled.p`
  font-size: 0.8rem;
`;
const SinglePodcast = () => {
  const { currentPodcast, isLoading } = useSelector(
    (state) => state.podcastsReducer
  );