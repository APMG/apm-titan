import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './Loading';

const stories = storiesOf('Atoms/Loading', module);

stories.add('Loading', () => {
  return <Loading />;
});
