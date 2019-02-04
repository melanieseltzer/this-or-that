import React from 'react';
import styled from 'styled-components';

interface Props {
  // If `type` is provided, should only be the following values
  type?: 'submit' | 'button' | 'text';
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({ type, name, value, onChange, placeholder }: Props) => (
  <InputStyled
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;

const InputStyled = styled.input`
  background: #f3f3f3;
  border: 0;
  border-bottom: 3px solid #aaa;
  flex-basis: 100%;
  font-size: 2rem;
  height: 4rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  @media (min-width: 768px) {
    flex-basis: 49%;
  }
`;
