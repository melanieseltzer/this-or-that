import React, { Component } from 'react';

import LoadFonts from '../../fonts';
import Form from '../Form';
import Layout from '../Layout';
import Result from '../Result';

class App extends Component {
  state = {
    result: '',
    error: false
  };

  componentDidMount() {
    LoadFonts();
  }

  updateResult = (result: string | boolean) => {
    // if result comes back false it means there was an error
    // so set error to true and result to false
    if (!result) {
      this.setState({
        error: true
      });

      return;
    }

    // otherwise we're good! so update the result
    this.setState({
      result,
      error: false
    });
  };

  public render() {
    const { error, result } = this.state;

    return (
      <Layout>
        <Form updateResult={this.updateResult} />

        {/* TODO: Implement proper error message */}
        {error && <p>Error!</p>}
        {result && <Result result={result} />}
      </Layout>
    );
  }
}

export default App;
