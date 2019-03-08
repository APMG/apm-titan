import React from 'react';
import { Link } from '@reach/router'; // eslint-disable-line
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Teaser from './Teaser';
import { withReadme } from 'storybook-readme'; // eslint-disable-line
import readme from './README.md';
import { teaser } from './test/data/teaser';
import { image } from './test/data/image';

const stories = storiesOf('Teaser', module);
stories.addDecorator(withKnobs).addDecorator(withReadme([readme]));

stories
  .add('Teaser default', () => (
    <Teaser
      href={text('Link', 'https://www.mpr.org')}
      headingLevel={2}
      description={text('Description', 'Enter description text here')}
      title={text('Title', 'Enter title text here')}
    />
  ))
  .add('Teaser with contributors', () => {
    const contributors = [
      text('Contributor one name', 'Sally TacoPants'),
      text('Contributor two name', 'Jazzy J')
    ];

    return (
      <Teaser
        contributors={contributors}
        href={text('Link', 'https://www.mpr.org')}
        headingLevel={2}
        description={text('Description', 'Enter description text here')}
        title={text('Title', 'Enter title text here')}
      />
    );
  })
  .add('Teaser with tag', () => {
    const tag = {
      title: text('title', 'Teaser text example'),
      href: text('Link', 'https://www.mpr.org')
    };
    return (
      <Teaser
        tag={tag}
        href={text('Link', 'https://www.mpr.org')}
        headingLevel={2}
        description={text('Description', 'Enter description text here')}
        title={text('Title', 'Enter title text here')}
      />
    );
  })

  .add('Teaser with image', () => {
    return (
      <Teaser
        image={image}
        href={text('Link', 'https://www.mpr.org')}
        headingLevel={2}
        description={text('Description', 'Enter description text here')}
        title={text('Title', 'Enter title text here')}
      />
    );
  })

  .add('Teaser with audio', () => {
    return (
      <Teaser
        audio={teaser.audio}
        href={text('Link', teaser.canonicalSlug)}
        headingLevel={2}
        description={text('Description', teaser.descriptionText)}
        title={text('Title', teaser.title)}
      />
    );
  })

  .add('Teaser with publishDate', () => {
    return (
      <Teaser
        audio={teaser.audio}
        href={text('Link', teaser.canonicalSlug)}
        headingLevel={2}
        publishDate={teaser.publishDate}
        description={text('Description', teaser.descriptionText)}
        title={text('Title', teaser.title)}
      />
    );
  })

  .add('Teaser with everything', () => {
    const imageTeaser = {
      alt: text('Image alt tag', 'Image alt tag goes here'),
      src: text('Image source url', 'https://source.unsplash.com/weekly?water'),
      srcset: text(
        'Image url for srcset',
        'https://source.unsplash.com/weekly?water'
      )
    };
    const tag = {
      title: text('title', 'Teaser text example'),
      href: text('Link', 'https://www.mpr.org')
    };
    const contributors = [
      text('Contributor one name', 'Sally TacoPants'),
      text('Contributor two name', 'Jazzy J')
    ];
    return (
      <Teaser
        audio={teaser.audio}
        image={imageTeaser}
        tag={tag}
        contributors={contributors}
        href={text('Link', 'https://www.mpr.org')}
        headingLevel={2}
        publishDate={teaser.publishDate}
        description={text('Description', 'Enter description text here')}
        title={text('Title', 'Enter title text here')}
      />
    );
  });
