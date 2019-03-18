import React from 'react';
import Link from './Link';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Atoms/Link', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories.add('Basic Link', () => {
  return (
    <Link
      to={select(
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
