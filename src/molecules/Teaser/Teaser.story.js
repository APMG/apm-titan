import React from 'react';
import { Image } from 'apm-mimas';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Teaser from './Teaser';
import { withReadme } from 'storybook-readme';
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
    const tempImage = <Image image={image} />;
    return (
      <Teaser
        image={tempImage}
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
    const tempImage = <Image image={image} />;
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
        image={tempImage}
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
