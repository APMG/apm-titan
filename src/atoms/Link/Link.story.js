import React from 'react';
import Link from './Link'; // eslint-disable-line
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Link', module);

stories.addDecorator(withKnobs);

stories.add('Basic Link', () => {
  return (
    <Link
      href={select(
        'To',
        [`${window.location.origin}/page`, 'https://example.com', '/page'],
        '/page'
      )}
      className={text('CSS Class', 'link')}
    >
      {text('Inner Text', 'Text')}
    </Link>
  );
});
