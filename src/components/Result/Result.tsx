import React, { PureComponent } from 'react';

interface Props {
  result: string;
}

class Result extends PureComponent<Props> {
  render() {
    const { result } = this.props;
    return <div>You should pick: {result}!</div>;
  }
}

export default Result;
