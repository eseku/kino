import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Rating from "./Rating";

const MovieDetails = props => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <div
          style={{
            height: "100%",
            flex: 0.3
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <div>
              <BackButton
                icon={<ArrowLeftOutlined />}
                onClick={event => {
                  props.back();
                }}
              />
            </div>
          </div>

          <div style={{}}>
            {props.movie.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
              />
            )}
          </div>
        </div>
        <div
          style={{
            height: "100%",
            flex: 0.7,
            border: "none",
            padding: "0 5rem"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: " 0 0 60px 0"
            }}
          >
            <Topic>Film Selection</Topic>
            <Topic>Movie Review</Topic>
            <Topic>My Home</Topic>
          </div>
          <div style={{ border: "none", paddingBottom: "2rem" }}>
            <div>
              <h1 style={{ fontSize: "50px", margin: 0, padding: "0px" }}>
                {props.movie.title}
              </h1>{" "}
            </div>
            <div>
              <Rating show={true} value={props.movie.vote_average} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "1rem"
              }}
            >
              <div>
                <p>
                  Type:{" "}
                  {props.movie.genres &&
                    props.movie.genres.map((genre, index) => {
                      if (index === props.movie.genres.length - 1) {
                        return `${genre.name}`;
                      } else {
                        return `${genre.name}/`;
                      }
                    })}
                </p>
                <p>
                  Producer Country/Region:{" "}
                  {(props.movie.production_companies &&
                    props.movie.production_companies[0].origin_country) ||
                    (props.movie.production_companies &&
                      props.movie.production_companies[1].origin_country)}
                </p>
              </div>
              <div>
                <Button size="large" icon={<PlusOutlined />}>
                  Collection
                </Button>
              </div>
            </div>
          </div>
          <hr />
          <div style={{ paddingTop: "2rem" }}>
            <p style={{ fontSize: "1.3rem" }}>{props.movie.overview}</p>
            <div style={{ margin: "3rem 0", padding: "0 0" }}>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1728FF",
                  border: "none",
                  padding: "1rem 5rem",
                  fontSize: "1.3rem",
                  margin: 0
                }}
              >
                TICKET
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

const BackButton = styled(Button)`
  border: none;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  margin: 50px 0;

  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(250, 250, 250, 0.2)));
`;

const Topic = styled.div`
  padding-right: 5rem;
`;
