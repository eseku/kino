import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Spin } from "antd";
import Movie from "./MovieCard";

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const sec = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5`;
const Discover = () => {
  const [movies, setMovies] = React.useState([]);
  const [onlyOn, setOnlyOn] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(url)
      .then(data => {
        setMovies(data.data.results);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(sec)
      .then(data => {
        setOnlyOn(data.data.results);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div style={{ paddingBottom: "5rem" }}>
        <div>
          <h2 style={{ color: "white" }}>Recommended For You</h2>
        </div>

        <Spin spinning={loading}>
          <ImageContainer>
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                  id={movie.id}
                />
              );
            })}
          </ImageContainer>
        </Spin>
      </div>
      <div style={{ paddingBottom: "5rem" }}>
        <div>
          <h2 style={{ color: "white" }}>Only on Kino</h2>
        </div>

        <Spin spinning={loading}>
          <ImageContainer>
            {onlyOn.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                  id={movie.id}
                />
              );
            })}
          </ImageContainer>
        </Spin>
      </div>
    </>
  );
};

export default Discover;

const ImageContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
