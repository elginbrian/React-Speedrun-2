import React from "react";
import { imagesrc } from "../api/Request";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

export const MovieItem = ({ item, id }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img className="w-full h-auto block" src={imagesrc + "/" + item?.backdrop_path} alt={item?.title}></img>

      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xl md:text-sm font-bold flex justify-center h-full items-center">{item?.title}</p>
        <p>{like ? <FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />}</p>
      </div>
    </div>
  );
};
