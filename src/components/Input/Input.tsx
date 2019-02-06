import React, { Fragment } from 'react';
import styled from 'styled-components';

interface Props {
  // If `type` is provided, should only be the following values
  type?: 'submit' | 'button' | 'text';
  // For matching label with correct input (<label for="..">)
  id: string;
  // Reference the correct input
  name: string;
  // Optional label name (defaults to id if not defined)
  labelName?: string;
  // Track what's in the input
  value: string;
  // Function to track current input value in state
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  // Optional placeholder text
  placeholder?: string;
}

const Input = (props: Props) => (
  <InputWrapper>
    <InputStyled {...props} />
    <Label htmlFor={props.id}>{props.labelName || props.id}</Label>
  </InputWrapper>
);

export default Input;

const InputWrapper = styled.div`
  position: relative;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 49%;
  }
`;

const Label = styled.label`
  color: #8e2de2;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 1rem;
  transition: all 0.2s;
`;

const InputStyled = styled.input`
  background: #f3f3f3;
  border: 0;
  border-bottom: 3px solid #8e2de2;
  font-size: 1.2rem;
  height: 5rem;
  margin-bottom: 1.5rem;
  padding: 2rem 1rem 1rem 1rem;
  width: 100%;
  transition: all 0.2s;
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
`;
