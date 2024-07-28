import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { MovieItem } from "./MovieItem";

export const HomeRow = ({ title, fetchURL }) => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <div>
      <h2 className="font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <MovieItem item={item} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
