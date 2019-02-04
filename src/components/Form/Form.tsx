import React, { Component } from 'react';
import Input from '../Input';

import { getResult } from '../../utils/helpers';

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
    const result = getResult(firstInput, secondInput);

    // update parent state with this result using the function
    // passed via props
    updateResult(result);
  };

  public render() {
    const { firstInput, secondInput } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="firstInput"
          value={firstInput}
          onChange={this.handleChange}
        />
        or
        <Input
          name="secondInput"
          value={secondInput}
          onChange={this.handleChange}
        />
        <button type="submit">Decide!</button>
      </form>
    );
  }
}

export default Form;
