/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';
import {
  setFavoritesSorting,
  setFavouritesDisplayedPodcasts,
} from '../globalState/reducers/podcastsReducer';
