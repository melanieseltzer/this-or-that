import React, { Component } from 'react';
import styled from 'styled-components';
import pikkr from 'pikkr';

import Input from '../Input';

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

  public render() {
    const { firstInput, secondInput } = this.state;

    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <Input
          name="firstInput"
          id="This"
          value={firstInput}
          onChange={this.handleChange}
          placeholder="Pizza"
        />
        <Input
          name="secondInput"
          id="Or That"
          value={secondInput}
          onChange={this.handleChange}
          placeholder="Hamburger"
        />
        <Button type="submit">Decide</Button>
      </FormWrapper>
    );
  }
}

export default Form;

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  flex: 0 0 100%;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  border: 0;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  height: 5rem;
  flex-basis: 100%;
`;
