import React from 'react';

interface Props {
  // If `type` is provided, should only be the following values
  type?: 'submit' | 'button' | 'text';
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, value, onChange }: Props) => (
  <input name={name} type={type} value={value} onChange={onChange} />
);

export default Input;
