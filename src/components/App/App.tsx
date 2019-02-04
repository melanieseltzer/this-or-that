import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

import LoadFonts from '../../fonts';
import Form from '../Form';
import Layout from '../Layout';

class App extends Component {
  state = {
    result: false,
    error: false,
    open: false
  };

  componentDidMount() {
    LoadFonts();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false, result: false });
  };

  updateResult = (result: string | boolean) => {
    // if result comes back false it means there was an error
    // so set error to true
    if (!result) {
      this.setState({
        error: true
      });
    } else {
      // otherwise we're good! so update the result
      this.setState({
        result,
        error: false
      });
    }

    this.onOpenModal();
  };

  public render() {
    const { error, open, result } = this.state;

    return (
      <Layout>
        <Form updateResult={this.updateResult} />

        <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false}>
          {result && (
            <h2>
              You should pick <Span>{result}</Span>!
            </h2>
          )}
          {error && <h2>Oops! Please enter two things to make a decision.</h2>}
        </Modal>
      </Layout>
    );
  }
}

export default App;

const Span = styled.span`
  color: #8e2de2;
`;
