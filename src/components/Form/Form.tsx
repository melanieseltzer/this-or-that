import React, { Component } from 'react';
import styled from 'styled-components';
import pikkr from 'pikkr';
import { FloatingLabel, Input, Label } from '@mels/react-components';

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
        <FloatingLabelStyled color="#8e2de2" border={2}>
          <InputStyled
            background="#fff"
            id="firstInput"
            name="firstInput"
            value={firstInput}
            onChange={this.handleChange}
            placeholder="Pizza"
          />
          <Label htmlFor="firstInput">This</Label>
        </FloatingLabelStyled>

        <FloatingLabelStyled color="#8e2de2" border={2}>
          <InputStyled
            background="#fff"
            id="secondInput"
            name="secondInput"
            value={secondInput}
            onChange={this.handleChange}
            placeholder="Hamburger"
          />
          <Label htmlFor="secondInput">Or That</Label>
        </FloatingLabelStyled>

        <Button type="submit">Decide</Button>
      </FormWrapper>
    );
  }
}

export default Form;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 414px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  border: 0;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem;
`;

const InputStyled = styled(Input)`
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const FloatingLabelStyled = styled(FloatingLabel)`
  flex-grow: 1;
`;
