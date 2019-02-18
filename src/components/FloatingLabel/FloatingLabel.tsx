import React from 'react';
import styled from 'styled-components';

const FloatingLabel = (props: FloatingLabel) => {
  const { children } = props;

  // Using the React.Children.map utility, we can map over each child and assign the float
  // prop to each one using React.cloneElement, which we can then leverage for styling in
  // Input and Label's styled components (if float is true then apply the float styles).
  // Since this is only called within the FloatingLabel component, the float prop won't be
  // applied if using an Input or Label outside of that context. This saves us from having
  // to pass the float prop down to each child manually.
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { float: true })
  );

  return <StyledFloatingLabel>{childrenWithProps}</StyledFloatingLabel>;
};

export default FloatingLabel;

const StyledFloatingLabel = styled.div`
  position: relative;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 49%;
  }
`;
