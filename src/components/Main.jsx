import React, { useEffect, useState } from "react";
import request from "../api/Request";
import axios from "axios";

export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data);
    });
  }, []);
  console.log(movies);

  return (
    <div>
      <div></div>
    </div>
  );
};
