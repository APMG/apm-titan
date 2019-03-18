import React from 'react';
import { Link } from '@reach/router'; // eslint-disable-line
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import Figure from './Figure';

const stories = storiesOf('Atoms/Figure', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories.add('Full config', () => {
  return (
    <Figure
      size={select('Size', ['full', 'half', 'quarter'], 'full')}
      position={select('Position', [null, 'left', 'right'], null)}
      image={{
        fallbackSrc: text(
          'Example Img Src',
          'https://via.placeholder.com/800x500'
        ),
        alt: text('Img Alt Text', 'Example')
      }}
      caption={text(
        'Caption',
        'Lorem ipsum dolor, sit amet consectitur sit elit.'
      )}
      credit={text('Credit', 'Picture McPhotoface')}
      creditHref={text('Credit Href', 'http://example.com')}
    />
  );
});
