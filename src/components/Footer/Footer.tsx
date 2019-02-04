import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterStyled>
    <p>
      Made with ❤️ by{' '}
      <a
        href="https://github.com/melanieseltzer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Melanie Seltzer
      </a>
    </p>
    <a
      className="github-button"
      href="https://github.com/melanieseltzer/this-or-that"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star melanieseltzer/this-or-that on GitHub"
    >
      Star
    </a>
  </FooterStyled>
);

export default Footer;

const FooterStyled = styled.footer`
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
  p {
    font-size: 1rem;
  }
  a {
    color: inherit;
  }
`;
