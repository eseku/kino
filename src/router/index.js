import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  SingleMoviePage,
  MainPage,
  Discover,
  TvMovies,
  Popular,
  WatchLater
} from "../components";
// import

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/movie/:movieId" component={SingleMoviePage} />
            <MainPage>
              <Route path="/" component={Discover} exact />
              <Route path={"/tv&movies"} component={TvMovies} />
              <Route path="/popular" component={Popular} />
              <Route path="/watchlater" component={WatchLater} />
            </MainPage>
          </Switch>
        </>
      </BrowserRouter>
    </>
  );
};

export default Router;
