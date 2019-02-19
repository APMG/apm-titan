import React from 'react';
import { Heading } from './lib';
import { render } from 'react-dom';

const App = () => (
  <div>
    <Heading title={'this is a title'} level={3}>Title</Heading>
  </div>
);

render(<App />, document.getElementById('root'));
