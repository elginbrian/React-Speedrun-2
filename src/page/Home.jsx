import React from "react";
import { Main } from "../components/Main";
import { HomeRow } from "../components/HomeRow";
import { request, imagesrc } from "../api/Request";

export const Home = () => {
  return (
    <div>
      <Main />
      <HomeRow title="Upcoming" fetchURL={request.requestUpcoming} />
      <HomeRow title="Trending" fetchURL={request.requestTrending} />
      <HomeRow title="Popular" fetchURL={request.requestPopular} />
      <HomeRow title="Top Rated" fetchURL={request.requestTopRated} />
      <HomeRow title="Horror" fetchURL={request.requestHorror} />
    </div>
  );
};
