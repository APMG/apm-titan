import React from 'react';
import { Link } from '@reach/router'; // eslint-disable-line
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Taglink from './TagLink';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Atoms/TagLink', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories.add('TagLink All Props', () => {
  return (
    <Taglink
      title={text('Title', 'TOPIC')}
      to={text('Link', 'url/path/')}
      tagName={text('Tag Name', 'Live from Here')}
      elementClass={text('elementClass', 'event_topic')}
    />
  );
});
