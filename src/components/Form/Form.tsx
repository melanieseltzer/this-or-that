import React, { Component } from 'react';
import styled from 'styled-components';
import pikkr from 'pikkr';
import { Floating, Input, Label } from '@mels/react-components';

interface Props {
  updateResult: (result: string | boolean) => void;
}

class Form extends Component<Props> {
  state = {
    firstInput: '',
    secondInput: ''
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // using the name attribute on each <input>, we can update
    // the correct input in state
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstInput, secondInput } = this.state;
    const { updateResult } = this.props;

    // make a decision using each input value and get a result
    const result = pikkr([firstInput, secondInput]);

    // update parent state with this result using the function
    // passed via props
    updateResult(result);
  };

  render() {
    const { firstInput, secondInput } = this.state;

    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <FloatingWrapper>
          <InputWrapper
            background="#fff"
            id="firstInput"
            name="firstInput"
            value={firstInput}
            onChange={this.handleChange}
            placeholder="Pizza"
            color="#8e2de2"
            border={2}
            borderBottom
          />
          <Label htmlFor="firstInput" color="#8e2de2">
            This
          </Label>
        </FloatingWrapper>

        <FloatingWrapper>
          <InputWrapper
            background="#fff"
            id="secondInput"
            name="secondInput"
            value={secondInput}
            onChange={this.handleChange}
            placeholder="Hamburger"
            color="#8e2de2"
            border={2}
            borderBottom
          />
          <Label htmlFor="secondInput" color="#8e2de2">
            Or That
          </Label>
        </FloatingWrapper>

        <Button type="submit">Pick</Button>
      </FormWrapper>
    );
  }
}

export default Form;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  border: 0;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  max-width: 200px;
  width: 100%;
`;

const FloatingWrapper = styled(Floating)`
  font-size: 14px;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
  flex-grow: 1;
  width: 100%;
`;

const InputWrapper = styled(Input)`
  :focus::placeholder,
  :focus::-webkit-input-placeholder {
    font-size: 14px;
  }
  width: 100%;
`;
