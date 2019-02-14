import React from 'react';
import styled from 'styled-components';

const FloatingLabel = (props: FloatingLabel) => {
  // Since in the context of FloatingLabel we want the label to automatically float,
  // we can clone each child and add on float: true, which we can leverage
  // in the <Label> styled component (positioning)
  const { children } = props;
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { float: true })
  );

  return <RelativeWrapper>{childrenWithProps}</RelativeWrapper>;
};

export default FloatingLabel;

const RelativeWrapper = styled.div`
  position: relative;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 49%;
  }
`;
