import React from 'react';
import styled from 'styled-components';

interface Props {
  float?: boolean;
}

const Input = (props: Input) => <StyledInput {...props} />;

export default Input;

const StyledInput = styled.input`
  background: #f3f3f3;
  border: 0;
  border-bottom: 3px solid #8e2de2;
  font-size: 1.2rem;
  height: 5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  transition: all 0.2s;
  /* Top padding for the placeholder to sit properly when floated */
  padding: ${(props: Props) =>
    props.float ? `2rem 1rem 1rem 1rem` : '0 1rem'};
  ${(props: Props) =>
    props.float &&
    `
      &:hover {
        background: #e4e4e4;
      }
      /* normal label size (when placeholder is there but hidden aka not focused) */
      :placeholder-shown + label {
        transform-origin: left bottom;
        transform: translate(0, 2.125rem) scale(1.5);
      }
      /* when not focused, hide the placeholder */
      :placeholder-shown:not(:focus)::placeholder,
      :placeholder-shown:not(:focus)::-webkit-input-placeholder {
        opacity: 0;
        transition: inherit;
      }
      /* show the placeholder only when input is focused */
      :focus::placeholder,
      :focus::-webkit-input-placeholder {
        color: #757575;
        opacity: 1;
      }
      /* shrink the label when focused and also when text has been entered */
      :not(:placeholder-shown) + label,
      :focus + label {
        padding-top: 0.5rem;
        transform: translate(0, 0) scale(1);
        cursor: pointer;
      }
    `}
`;
