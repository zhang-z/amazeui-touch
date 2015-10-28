import React from 'react';
import {
  Container,
  Group,
  Loader,
} from '../UI';

const LoaderExample = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <Group
          header="默认样式"
        >
          <Loader />
        </Group>
      </Container>
    );
  }
});

export default LoaderExample;
