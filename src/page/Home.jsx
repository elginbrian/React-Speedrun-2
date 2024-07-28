import React from "react";
import { Main } from "../components/Main";
import { HomeRow } from "../components/HomeRow";
import { request, imagesrc } from "../api/Request";

export const Home = () => {
  return (
    <div>
      <Main />
      <HomeRow rowId="1" title="Upcoming" fetchURL={request.requestUpcoming} />
      <HomeRow rowId="2" title="Trending" fetchURL={request.requestTrending} />
      <HomeRow rowId="3" title="Popular" fetchURL={request.requestPopular} />
      <HomeRow rowId="4" title="Top Rated" fetchURL={request.requestTopRated} />
      <HomeRow rowId="5" title="Horror" fetchURL={request.requestHorror} />
    </div>
  );
};
