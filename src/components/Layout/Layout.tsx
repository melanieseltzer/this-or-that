import React, { Fragment, ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '../Header';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => (
  <App>
    <GlobalStyle />
    <Header />
    <main>{props.children}</main>
  </App>
);

export default Layout;

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box 
  }

  body {
    background: #56ab2f;
    background: linear-gradient(to left, #56ab2f, #a8e063);
    font-family: 'Rubik', sans-serif;
    margin: 0;
  }
`;

const App = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
