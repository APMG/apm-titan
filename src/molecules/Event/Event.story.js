import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Event from './Event';

const stories = storiesOf('Event', module);
stories.addDecorator(withKnobs({ escapeHTML: false }));

stories
  .add('Event All props', () => {
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
        artist={{
          id: number('Venue id', 1233),
          name: text('Name', 'Anthony Kiedis'),

          slug: 'mock-slug-the-red-hot-chili-peppers',
          photo_id: null,
          image_slug: '20180104-tba',
          website: text(
            'Website URL',
            'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'
          ),
          facebook: text(
            'Facebook URL',
            'https://www.facebook.com/ChiliPeppers/'
          ),
          twitter: text('https://twitter.com/ChiliPeppers'),

          is_local: false,
          updated_at: '2018-01-04T14:16:28.000-06:00'
        }}
        eventPrices={[
          {
            price: text('Event Price 1', '70.0'),
            description: text(
              'Event Price Description 1',
              'Member price general admission'
            )
          },
          {
            price: text('Event Price 2', '300.0'),
            description: text('Event Price Description 2', 'VIP member')
          }
        ]}
        eventDates={[
          {
            date: text('Event Date 1', 'August 5th, 2019')
          },
          {
            date: text('Event Date 2', 'August 23th, 2019')
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
        artist={{
          id: number('Venue id', 1233),
          name: text('Name', 'Anthony Kiedis'),

          slug: 'mock-slug-the-red-hot-chili-peppers',
          photo_id: null,
          image_slug: '20180104-tba',
          website: text(
            'Website URL',
            'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'
          ),
          facebook: text(
            'Facebook URL',
            'https://www.facebook.com/ChiliPeppers/'
          ),
          twitter: text('https://twitter.com/ChiliPeppers'),

          is_local: false,
          updated_at: '2018-01-04T14:16:28.000-06:00'
        }}
        eventDates={[
          {
            date: text('Event Date 1', 'August 5th, 2019')
          },
          {
            date: text('Event Date 2', 'August 23th, 2019')
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
      />
    );
  })
  .add('Event dates', () => {
    return (
      <Event
        eventDates={[
          {
            date: text('Event Date 1', 'August 5th, 2019')
          },
          {
            date: text('Event Date 2', 'August 23th, 2019')
          }
        ]}
      />
    );
  })
  .add('Event artist', () => {
    return (
      <Event
        artist={{
          id: number('Venue id', 1233),
          name: text('Name', 'Anthony Kiedis'),

          slug: 'mock-slug-the-red-hot-chili-peppers',
          photo_id: null,
          image_slug: '20180104-tba',
          website: text(
            'Website URL',
            'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'
          ),
          facebook: text(
            'Facebook URL',
            'https://www.facebook.com/ChiliPeppers/'
          ),
          twitter: text('https://twitter.com/ChiliPeppers'),

          is_local: false,
          updated_at: '2018-01-04T14:16:28.000-06:00'
        }}
      />
    );
  })
  .add('Event prices', () => {
    const eventPrices = [
      {
        price: text('Event Price 1', '70.0'),
        description: text(
          'Event Price Description 1',
          'Member price general admission'
        )
      },
      {
        price: text('Event Price 1', '300.0'),
        description: text('Event Price Description 1', 'VIP member')
      }
    ];

    return (
      <Event
        eventPrices={eventPrices}
        website={{ ticketLink: 'ticket/link/url' }}
      />
    );
  });
