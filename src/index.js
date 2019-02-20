import React from 'react';
import { Heading, Button } from './lib';
import { render } from 'react-dom';

const App = () => (
  <div>
    <Heading title={'this is a title'} level={1}>Heading Example</Heading>
    <Button>Button example</Button>
  </div>
);

render(<App />, document.getElementById('root'));
