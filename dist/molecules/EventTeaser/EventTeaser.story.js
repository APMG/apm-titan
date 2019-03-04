import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import EventTeaser from './EventTeaser';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Event Teaser', module);
stories
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator(withReadme([readme]));

stories.add('Event Teaser All Props', () => {
  return (
    <EventTeaser
      id={number('id', 2323)}
      title={text('Title', 'Event Teaser Title')}
      headingLevel={number('Heading level', 2)}
      venue={{
        id: number('Venue id', 133),
        name: text('Name', 'Walker Art Center'),
        street: text('Street', '1750 Hennepin Ave.'),
        city: text('City', 'Minneapolis'),
        state: text('State', 'MN'),
        zip: text('zip', '55403'),
        latitude: text('Latitude', '44.968436'),
        longitude: text('Longitude', '-93.288541'),
        website: text('Website URL', 'http://www.walkerart.org/'),
        facebook: text(
          'Facebook URL',
          'https://www.facebook.com/walkerartcenter'
        ),
        twitter: text('Twitter URL', 'walkerartcenter'),
        photo_id: '',
        image_slug: null,
        phone: text('Phone', '(612) 375-7600'),
        slug: 'walker-art-center',
        updated_at: '2016-08-11T14:09:52.000-05:00'
      }}
      eventDates={[
        {
          date: text('Event Date 1', 'August 5th, 2019')
        },
        {
          date: text('Event Date 2', 'August 10th, 2019')
        }
      ]}
    />
  );
});
