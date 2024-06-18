/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const GenreFilter = ({ genres, handleFilter }) => {
  return (
    <div>
      <h2>Filter by Genre</h2>
      <select onChange={(e) => handleFilter(e.target.value)}>
        {genres.map((genre) => (
          <option value={genre.id}>{genre.title}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
