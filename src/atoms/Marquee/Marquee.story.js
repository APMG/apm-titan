import React from 'react';
import Marquee from './Marquee';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Atoms/Marquee', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories.add('Basic Link', () => {
  return (
    <Marquee className={text('CSS Class', 'link')}>
      {text('Inner Text', 'Text')}
    </Marquee>
  );
});
