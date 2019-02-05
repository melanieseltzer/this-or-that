import React, { Component } from 'react';
import Confetti from 'react-dom-confetti';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

import LoadFonts from '../../fonts';
import Form from '../Form';
import Layout from '../Layout';

import { config } from '../../utils/config';

class App extends Component {
  state = {
    result: false,
    error: false,
    open: false,
    confetti: false
  };

  componentDidMount() {
    // Loads fonts on mount so it's not render blocking
    LoadFonts();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({
      open: false,
      result: false,
      confetti: false
    });
  };

  updateResult = (result: string | boolean) => {
    // if result comes back false it means there was an error
    // so set error to true
    if (!result) {
      this.setState({
        error: true,
        confetti: false
      });
    } else {
      // otherwise we're good! so update the result and make it rain 🎉
      this.setState({
        result,
        error: false,
        confetti: true
      });
    }

    // launch the modal to house the result or the error message
    this.onOpenModal();
  };

  public render() {
    const { error, open, result, confetti } = this.state;

    return (
      <Layout>
        {/* forward the updater function to <Form> component */}
        <Form updateResult={this.updateResult} />

        <ConfettiWrapper>
          {/* confetti status is maintained in state */}
          <Confetti active={confetti} config={config} />
        </ConfettiWrapper>

        {/* modal will open for either an error or a result */}
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

const ConfettiWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2000;
`;
