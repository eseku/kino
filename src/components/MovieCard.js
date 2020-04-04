import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieCard = props => {
  return (
    <>
      <Link to={`/movie/${props.id}`}>
        <Wrapper>
          <div style={{ flex: 0.8 }}>
            <Image src={props.url} />
          </div>
          <div
            style={{
              flex: 0.2,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <span style={{ width: "180px", textOverflow: "ellipsis" }}>
              <Title>{props.title}</Title>
            </span>
          </div>
        </Wrapper>
      </Link>
    </>
  );
};

export default MovieCard;

const Wrapper = styled.div`
  margin-right: 30px;
  width: 180px;
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-wrap: break-word;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.2rem;
`;

const Title = styled.h1`
  text-align: center;
  // font-size: 10px;
  color: #dddddd;
`;
