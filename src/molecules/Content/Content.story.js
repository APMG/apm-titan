import React from 'react';
import { Image } from 'apm-mimas';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Content from './Content.js';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Content', module);

stories
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator(withReadme([readme]));

stories
  .add('Content All', () => {
    const testImage = (
      <Image
        fallbackSrc={text('Image Src', 'https://unsplash.it/1600/900')}
        alt={text('Image Alt Text', 'Description text example')}
      />
    );

    return (
      <Content
        authors={[
          { name: text('Author 1 Name', 'Jim'), href: '/bio/jim' },
          { name: text('Author 2 Name', 'Bill'), href: '/bio/bill' }
        ]}
        bodyHtml={text(
          'Body HTML',
          "<p>The body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>"
        )}
        image={testImage}
        imageCaption={text(
          'Image Caption',
          'Lorem Ipsum dolor sit amet consectitur sit elit'
        )}
        imageCredit={text('Image Credit', 'Some Guy')}
        imageCreditHref="https://example.com"
        headingLevel={number('Heading Level', 1)}
        publishDate={text('Publish Date', 'December 31, 2018')}
        subtitle={text(
          'Subtitle',
          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
        )}
        title={text('Title', 'Content Title')}
        tag={{ href: '/topic', title: 'Topic' }}
      />
    );
  })
  .add('Content w/o Image', () => {
    return (
      <Content
        authors={[
          { name: text('Author 1 Name', 'Jim'), href: '/bio/jim' },
          { name: text('Author 2 Name', 'Bill'), href: '/bio/bill' }
        ]}
        bodyHtml={text(
          'Body HTML',
          "<p>The body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>"
        )}
        imageCaption={text(
          'Image Caption',
          'Lorem Ipsum dolor sit amet consectitur sit elit'
        )}
        imageCredit={text('Image Credit', 'Some Guy')}
        imageCreditHref="https://example.com"
        headingLevel={number('Heading Level', 1)}
        publishDate={text('Publish Date', 'December 31, 2018')}
        subtitle={text(
          'Subtitle',
          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
        )}
        title={text('Title', 'Content Title')}
        tag={{ href: '/topic', title: 'Topic' }}
      />
    );
  })
  .add('Content w/o Body', () => {
    const testImage = (
      <Image
        fallbackSrc={text('Image Src', 'https://placekitten.com/1600/900')}
        alt={text('Image Alt Text', 'Awwwwwww')}
      />
    );
    return (
      <Content
        authors={[
          { name: text('Author 1 Name', 'Jim'), href: '/bio/jim' },
          { name: text('Author 2 Name', 'Bill'), href: '/bio/bill' }
        ]}
        image={testImage}
        imageCaption={text('Image Caption', "I can't even ❤️")}
        imageCredit={text('Image Credit', 'Some Guy')}
        imageCreditHref="https://example.com"
        headingLevel={number('Heading Level', 1)}
        publishDate={text('Publish Date', 'December 31, 2018')}
        subtitle={text(
          'Subtitle',
          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
        )}
        title={text('Title', 'Content Title')}
        tag={{ href: '/topic', title: 'Topic' }}
      />
    );
  });
