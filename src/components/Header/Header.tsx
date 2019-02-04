import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderStyled>
    <h1>🍕 or 🍔</h1>
  </HeaderStyled>
);

export default Header;

const HeaderStyled = styled.header`
  text-align: center;
  font-size: 2rem;
`;
