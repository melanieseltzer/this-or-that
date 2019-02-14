import React from 'react';
import styled from 'styled-components';

interface Props {
  float?: boolean;
}

const Label = (props: Label) => (
  <StyledLabel {...props}>{props.children}</StyledLabel>
);

export default Label;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  padding: 0 1rem;
  transition: all 0.2s;
  color: #8e2de2;
  /* Leverage props when used in context of floating label */
  ${(props: Props) =>
    props.float &&
    `
      position: absolute;
      top: 0;
      left: 0;
    `}
`;
