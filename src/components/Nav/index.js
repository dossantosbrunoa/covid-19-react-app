import React from "react";
import { Container, Title, NavItemsContainer } from "./styles";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <Container>
      <Title>COVID REACT APP</Title>
      <NavItemsContainer>
        <NavItem to={"/dashboard"}>Dasboard</NavItem>
        <NavItem to={"/por-pais"}>Por país</NavItem>
      </NavItemsContainer>
    </Container>
  );
};

export default Nav;
