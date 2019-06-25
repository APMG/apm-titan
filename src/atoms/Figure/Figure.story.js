import React from 'react';
import { Image } from 'apm-mimas';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import Figure from './Figure';

const stories = storiesOf('Atoms/Figure', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories.add('Full config', () => {
  const testImage = (
    <Image
      fallbackSrc={text('Example Image Src', 'http://placecorgi.com/800')}
      alt={text('Image Alt Text', 'a good boi')}
    />
  );

  return (
    <Figure
      size={select('Size', ['full', 'half', 'quarter'], 'full')}
      position={select('Position', [null, 'left', 'right'], null)}
      image={testImage}
      caption={text('Caption', 'a v good boi 11/10 would pet')}
      credit={text('Credit', 'Picture McPhotoface')}
      creditHref={text('Credit Href', 'http://example.com')}
    />
  );
});
