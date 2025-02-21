import React from "react";
import styled from "styled-components";
import FavoritesDialog from "../FavoritesDialog/FavoritesDialog";

const HeaderWrapper = styled.header`
  background-color: #4a90e2;
  color: white;
  padding: 16px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Weather App</Title>
      <FavoritesDialog />
    </HeaderWrapper>
  );
};

export default Header;
