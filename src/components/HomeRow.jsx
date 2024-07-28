import axios from "axios";
import React, { useState, useEffect } from "react";
import { MovieItem } from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const HomeRow = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const handleLeftClick = () => {
    const slider = document.getElementById("slider" + rowId);
    if (slider) {
      slider.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const handleRightClick = () => {
    const slider = document.getElementById("slider" + rowId);
    if (slider) {
      slider.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h2 className="font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={handleLeftClick} className="rounded-full left-0 absolute opacity-60 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />

        <div id={"slider" + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <MovieItem key={id} item={item} />
          ))}
        </div>

        <MdChevronRight onClick={handleRightClick} className="rounded-full right-0 absolute opacity-60 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
      </div>
    </div>
  );
};
