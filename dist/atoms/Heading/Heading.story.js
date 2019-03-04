import React from 'react';
import { Link } from '@reach/router'; // eslint-disable-line
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Heading from './Heading';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Atoms/Heading', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories.add('Heading All Props', () => {
  return (
    <Heading
      className={text('ClassName', 'hdg hdg-1')}
      level={number('Heading Level', 1)}
    >
      {text('Children', 'children')}
    </Heading>
  );
});
