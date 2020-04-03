import React from "react";
import axios from "axios";
import styled from "styled-components";
import {Spin} from "antd";

const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=f003a3e2b20875e5ea2272504eb9b98f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const Discover = () => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(url)
      .then(data => {
        setMovies(data.data.results);
        setLoading(false);
        console.log("hook ran");
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div>
        <h2 style={{color: "white"}}>Recommended For You</h2>
      </div>
      {loading && (
        <div
          style={{
            padding: "100px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Spin size="large" style={{alignSelf: "center"}} />
        </div>
      )}
      <ImageContainer>
        {movies.map(movie => {
          return (
            <div key={movie.id}>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  style={{
                    width: "200px",
                    height: "300px",
                    marginRight: "30px"
                  }}
                />
              )}
            </div>
          );
        })}
      </ImageContainer>
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
