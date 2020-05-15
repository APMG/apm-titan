import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Time from './Time';

const stories = storiesOf('Atoms/Time', module);

stories.addDecorator(withKnobs);

stories.add('Time All Props', () => {
  return (
    <Time
      dateTime={text('DateTime', '2019-07-18T04:00:00-05:00')}
      type={select('Type', ['timestamp', 'distance'], 'timestamp')}
      formatString={text('Format String', 'MMMM DD, YYYY')}
      elementClass={text('elementClass', '')}
    />
  );
});
