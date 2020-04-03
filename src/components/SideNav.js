import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideNav = () => {
  return (
    <>
      <PseudoLoogo>KINDLARE</PseudoLoogo>
      <div>
        <SubHeading>BROWSE KINDLARE</SubHeading>
        <List>
          <StyledNavLink
            exact
            to=""
            activeStyle={{ borderLeftColor: "#7CE6F3", color: "#7CE6F3" }}
          >
            <p style={{ margin: 0 }}>DISCOVER</p>
          </StyledNavLink>

          <StyledNavLink
            to={"/tv&movies"}
            activeStyle={{ borderLeftColor: "#7CE6F3", color: "#7CE6F3" }}
          >
            <p style={{ margin: 0 }}>TV {"&"} MOVIES</p>
          </StyledNavLink>
          <StyledNavLink
            to="/popular"
            activeStyle={{ borderLeftColor: "#7CE6F3", color: "#7CE6F3" }}
          >
            <p style={{ margin: 0 }}>POPULAR CLIPS</p>
          </StyledNavLink>
          <StyledNavLink
            to="/watchlater"
            activeStyle={{ borderLeftColor: "#7CE6F3", color: "#7CE6F3" }}
          >
            <p style={{ margin: 0 }}>WATCH LATER</p>
          </StyledNavLink>
        </List>
      </div>

      <div>
        <SubHeading>CATEGORIES</SubHeading>
        <Categories>
          <Category>
            <p>Kuwait TV</p>
          </Category>
          <Category>
            <p>Free Shows</p>
          </Category>
          <Category>
            <p>Arabic</p>
          </Category>
          <Category>
            <p>Action</p>
          </Category>
          <Category>
            <p>Comedy</p>
          </Category>
        </Categories>
      </div>
    </>
  );
};

export default SideNav;

const Logo = styled.div``;
const PseudoLoogo = styled.h3`
  font-size: 40px;
  color: #f4f6fa;
  font-weight: bold;
  padding: 0 50px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const ListItem = styled.li`
  // color: white;
  // padding: 0px 0px 0px 30px;
  // border-left: 5px solid #53b8c4;
  // margin-bottom: 10px;
  // display: flex;
  // align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  padding: 5px 0px 5px 30px;
  border-left: 5px solid transparent;
  margin-bottom: 10px;
  display: flex;
  font-weight: bold;
  align-items: center;

  :hover {
    color: #7ce6f3;
  }
`;

const SubHeading = styled.p`
  padding-left: 35px;
  font-size: 13px;
  color: grey;
`;

const Categories = styled.div``;

const Category = styled.div`
  padding: 5px 35px 5px 35px;
  color: white;
`;
