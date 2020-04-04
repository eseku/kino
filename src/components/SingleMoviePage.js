import React from "react";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";
import axios from "axios";
import Recommendations from "./Recommendations";

const SingleMoviePage = props => {
  const [movie, setMovie] = React.useState({});
  const [recommendations, setRecommendations] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        setMovie(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [props.match.params.movieId]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        // console.log(response.data.results);
        setRecommendations(response.data.results);
      })
      .catch(e => {
        console.log(e);
      });
  }, [props.match.params.movieId]);
  return (
    <>
      <Wrapper>
        <Details>
          <MovieDetails
            push={props.history.push}
            back={props.history.goBack}
            movie={movie}
          />
        </Details>
        <Recommended>
          <Recommendations movies={recommendations} />
        </Recommended>
      </Wrapper>
    </>
  );
};

export default SingleMoviePage;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

const Recommended = styled.div`
  background-color: #141b25;
  height: 100%;
  width: 100%;
  padding: 50px 100px;
  flex: 0.2;
  overflow-y: auto;
`;

const Details = styled.div`
  flex: 0.8;
  height: 100%;
  padding: 50px 100px;
`;
