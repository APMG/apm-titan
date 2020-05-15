import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Taglink from './TagLink';

const stories = storiesOf('Atoms/TagLink', module);

stories.addDecorator(withKnobs);

stories.add('TagLink All Props', () => {
  return (
    <Taglink
      title={text('Title', 'TOPIC')}
      href={text('Link', 'url/path/')}
      tagName={text('Tag Name', 'Live from Here')}
      elementClass={text('elementClass', 'event_topic')}
    />
  );
});
