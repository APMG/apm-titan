import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Event from './Event';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Event', module);
stories
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator(withReadme([readme]));

stories
  .add('Event All', () => {
    return (
      <Event
        title={text('Title', 'Event Title')}
        tag={{ href: '/topic', title: 'Topic' }}
        headingLevel={number('Heading level', 2)}
        publishDate={text('Publish Date', 'December 31, 2018')}
        description={text('Description', 'Description text')}
        subtitle={text(
          'Subtitle',
          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
        )}
        bodyHtml={text(
          'Body HTML',
          "<p>The Event body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>"
        )}
        venue={{
          id: 133,
          name: 'Walker Art Center ',
          street: '1750 Hennepin Ave.',
          city: 'Minneapolis',
          state: 'MN',
          zip: '55403',
          latitude: '44.968436',
          longitude: '-93.288541',
          website: 'http://www.walkerart.org/',
          facebook: 'https://www.facebook.com/walkerartcenter',
          twitter: 'walkerartcenter',
          photo_id: '',
          image_slug: null,
          phone: '(612) 375-7600',
          slug: 'walker-art-center',
          updated_at: '2016-08-11T14:09:52.000-05:00'
        }}
        artist={{
          id: 2591,
          name: 'Anthony Kiedis',
          slug: 'mock-slug-the-red-hot-chili-peppers',
          photo_id: null,
          image_slug: '20180104-tba',
          website: 'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers',
          facebook: 'https://www.facebook.com/ChiliPeppers/',
          twitter: 'https://twitter.com/ChiliPeppers',
          is_local: false,
          updated_at: '2018-01-04T14:16:28.000-06:00'
        }}
        price={[
          {
            price: '70.0',
            description: 'Member price general admission'
          },
          {
            price: '300.0',
            description: 'VIP Member'
          }
        ]}
        eventDates={[
          {
            date: 'August 5th, 2019'
          },
          {
            date: 'August 10th, 2019'
          }
        ]}
      />
    );
  })
  .add('Event w/o Body', () => {
    return (
      <Event
        title={text('Title', 'Event Title')}
        tag={{ href: '/topic', title: 'Topic' }}
        headingLevel={number('Heading level', 2)}
        publishDate={text('Publish Date', 'December 31, 2018')}
        description={text('Description', 'Description text')}
        subtitle={text(
          'Subtitle',
          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
        )}
        venue={{
          id: 133,
          name: 'Walker Art Center ',
          street: '1750 Hennepin Ave.',
          city: 'Minneapolis',
          state: 'MN',
          zip: '55403',
          latitude: '44.968436',
          longitude: '-93.288541',
          website: 'http://www.walkerart.org/',
          facebook: 'https://www.facebook.com/walkerartcenter',
          twitter: 'walkerartcenter',
          photo_id: '',
          image_slug: null,
          phone: '(612) 375-7600',
          slug: 'walker-art-center',
          updated_at: '2016-08-11T14:09:52.000-05:00'
        }}
        artist={{
          id: 2591,
          name: 'Anthony Kiedis',
          slug: 'mock-slug-the-red-hot-chili-peppers',
          photo_id: null,
          image_slug: '20180104-tba',
          website: 'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers',
          facebook: 'https://www.facebook.com/ChiliPeppers/',
          twitter: 'https://twitter.com/ChiliPeppers',
          is_local: false,
          updated_at: '2018-01-04T14:16:28.000-06:00'
        }}
        eventDates={[
          {
            date: 'August 5th, 2019'
          },
          {
            date: 'August 10th, 2019'
          }
        ]}
      />
    );
  })
  .add('Event w/o EventInfo', () => {
    return (
      <Event
        title={text('Title', 'Event Title')}
        tag={{ href: '/topic', title: 'Topic' }}
        headingLevel={number('Heading level', 2)}
        publishDate={text('Publish Date', 'December 31, 2018')}
        description={text('Description', 'Description text')}
        subtitle={text(
          'Subtitle',
          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
        )}
        bodyHtml={text(
          'Body HTML',
          "<p>The Event body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>"
        )}
      />
    );
  })
  .add('Event venue', () => {
    return (
      <Event
        venue={{
          id: 413,
          name: 'Keller Auditorium',
          street: '222 SW Clay St.',
          city: 'Portland',
          state: 'OR',
          zip: '97201',
          latitude: '45.512469',
          longitude: '-122.678113',
          website: 'http://www.portland5.com/keller-auditorium',
          facebook: 'https://www.facebook.com/portland5/',
          twitter: 'portland_5',
          photo_id: null,
          imageSlug: 'keller-auditorium-portland',
          phone: '(503) 248-4335',
          slug: 'keller-auditorium',
          updatedAt: '2017-08-15T11:26:48.000-05:00'
        }}
      />
    );
  })
  .add('Event dates', () => {
    return (
      <Event
        eventDates={[
          {
            date: 'August 5th, 2019'
          },
          {
            date: 'August 10th, 2019'
          }
        ]}
      />
    );
  })
  .add('Event artist', () => {
    return (
      <Event
        artist={{
          id: 2591,
          name: 'Anthony Kiedis',
          slug: 'mock-slug-the-red-hot-chili-peppers',
          photo_id: null,
          image_slug: '20180104-tba',
          website: 'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers',
          facebook: 'https://www.facebook.com/ChiliPeppers/',
          twitter: 'https://twitter.com/ChiliPeppers',
          is_local: false,
          updated_at: '2018-01-04T14:16:28.000-06:00'
        }}
      />
    );
  })
  .add('Event prices', () => {
    const eventPrices = [
      {
        price: '69.0',
        description: 'Member price general admission'
      },
      {
        price: '300.0',
        description: 'VIP Member'
      }
    ];

    return (
      <Event price={eventPrices} website={{ ticketLink: 'ticket/link/url' }} />
    );
  });
