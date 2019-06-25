import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Heading from './Heading';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Atoms/Heading', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories.add('Heading All Props', () => {
  return (
    <Heading
      className={text('className', '')}
      elementClass={text('Element Class', '')}
      level={select('Level', [1, 2, 3, 4, 5, 6], 1)}
    >
      {text('Children', 'Heading Inner Text')}
    </Heading>
  );
});
