import React, { Component, createRef, Fragment } from 'react';
import Input from '../Input';
import Result from '../Result';

import { getResult } from '../../utils/helpers';

class App extends Component {
  state = {
    result: '',
    error: false
  };

  // Track the inputs using ref
  firstOption = createRef<HTMLInputElement>();
  secondOption = createRef<HTMLInputElement>();

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const firstOption = this.firstOption.current;
    const secondOption = this.secondOption.current;

    // Get around the `Object is possibly 'null'` compile error
    // by checking with an if statement
    if (firstOption && secondOption) {
      // make a decision using each input value
      const result = getResult(firstOption.value, secondOption.value);

      // if result comes back false it means there was an error
      // so bail early
      if (!result) {
        this.setState({
          error: true
        });

        return;
      }

      this.setState({
        result,
        error: false
      });
    }
  };

  public render() {
    const { error, result } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <Input ref={this.firstOption} />
          or
          <Input ref={this.secondOption} />
          <button type="submit">Decide!</button>
        </form>

        {/* TODO: Implement proper error message */}
        {error && <p>Error!</p>}
        {result && <Result result={result} />}
      </Fragment>
    );
  }
}

export default App;
