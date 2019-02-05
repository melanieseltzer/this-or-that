import React, { Component } from 'react';
import Confetti from 'react-dom-confetti';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

import LoadFonts from '../../fonts';
import Form from '../Form';
import Layout from '../Layout';

class App extends Component {
  state = {
    result: false,
    error: false,
    open: false,
    confetti: false
  };

  componentDidMount() {
    LoadFonts();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false, result: false, confetti: false });
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
      // otherwise we're good! so update the result
      this.setState({
        result,
        error: false,
        confetti: true
      });
    }

    this.onOpenModal();
  };

  public render() {
    const { error, open, result, confetti } = this.state;

    // Confetti config
    const config = {
      angle: 360,
      spread: 360,
      startVelocity: 45,
      elementCount: 100,
      dragFriction: 0.1,
      duration: 3000,
      delay: 0,
      width: '15px',
      height: '15px',
      colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
    };

    return (
      <Layout>
        <Form updateResult={this.updateResult} />

        <ConfettiWrapper>
          <Confetti active={confetti} config={config} />
        </ConfettiWrapper>

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
