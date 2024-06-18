/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// api.js

import axios from "axios";

const api = axios.create({
  baseURL: "https://podcast-api.netlify.app/",
});

export const getShows = () => api.get("");
export const getShow = (id) => api.get(`id/${id}`);
export const getGenre = (id) => api.get(`genre/${id}`);
