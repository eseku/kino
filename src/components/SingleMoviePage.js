import React from "react";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";

const SingleMoviePage = props => {
  return (
    <>
      <Wrapper>
        <Details>
          <MovieDetails push={props.history.push} />
        </Details>
        <Recommended>
          <h1 style={{ color: "white" }}>Recommended</h1>
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
`;

const Details = styled.div`
  flex-basis: 280%;
  height: 100%;
  padding: 50px 100px;
`;
