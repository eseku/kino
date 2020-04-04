import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Recommendations = props => {
  return (
    <>
      <div>
        <h2 style={{ color: "white" }}>Movie Recommendations</h2>
        <div>
          {props.movies &&
            props.movies.map((movie, index) => {
              return (
                <Link to={`/movie/${movie.id}`}>
                  <div
                    key={index}
                    style={{ display: "flex", marginBottom: "50px" }}
                  >
                    <div style={{ padding: "10px 20px", flex: 0.3 }}>
                      <ImageWithReflection
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "0 0 0 10px",
                        flex: 0.7
                      }}
                    >
                      <div>
                        <p
                          style={{
                            color: "#f4f6fa",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            textOverflow: "ellipsis"
                          }}
                        >
                          {movie.title}
                        </p>
                        <Rating
                          value={movie.vote_average}
                          style={{
                            fontSize: "13px",
                            color: "#E1C980"
                          }}
                        />
                      </div>

                      <div>
                        <Button size="middle" ghost>
                          TICKET
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

Recommendations.defaultProps = {
  movies: []
};

export default Recommendations;

const ImageWithReflection = styled.img`
  width: 150px;
  height: 200px;

  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(73%, transparent), to(rgba(250, 250, 250, 0.2)));
`;
