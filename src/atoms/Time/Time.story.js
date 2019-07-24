import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Time from './Time';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Atoms/Time', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

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
