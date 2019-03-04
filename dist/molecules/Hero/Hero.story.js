import React from 'react';
import { Link } from '@reach/router'; // eslint-disable-line
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Hero from './Hero.js';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
const stories = storiesOf('Hero', module);
stories.addDecorator(withKnobs).addDecorator(withReadme([readme]));

stories
  .add('Hero default', () => {
    const imageHero = {
      alt: text('Image alt tag', 'Image alt tag'),
      src: text('Image source url', 'https://source.unsplash.com/weekly?water'),
      srcset: text(
        'Image url for srcset',
        'https://source.unsplash.com/weekly?water'
      )
    };
    return (
      <Hero
        image={imageHero}
        title={text('Title text', 'Hero Title')}
        subHead={text('Subhead text', 'Subhead text')}
        headingLevel="2"
        publishDate={text('Publish Date', '01/01/19')}
      />
    );
  })
  .add('Hero button', () => {
    const imageHero = {
      alt: text('Image alt tag', 'Image alt tag'),
      src: text('Image source url', 'https://source.unsplash.com/weekly?water'),
      srcset: text(
        'Image url for srcset',
        'https://source.unsplash.com/weekly?water'
      )
    };
    return (
      <Hero
        button="default button"
        image={imageHero}
        title={text('Title text', 'Hero Title')}
        subHead={text('Subhead text', 'Subhead text')}
        headingLevel="2"
        publishDate={text('Publish Date', '01/01/19')}
      />
    );
  })
  .add('Hero with contributorsText', () => {
    const contributorsText = [
      text('Contributor one name', 'Sally TacoPants'),
      text('Contributor two name', 'Jazzy J')
    ];
    const imageHero = {
      alt: text('Image alt tag', 'Image alt tag'),
      src: text('Image source url', 'https://source.unsplash.com/weekly?water'),
      srcset: text(
        'Image url for srcset',
        'https://source.unsplash.com/weekly?water'
      )
    };
    return (
      <Hero
        contributorsText={contributorsText}
        image={imageHero}
        title={text('Title text', 'Hero Title')}
        subHead={text('Subhead text', 'Subhead text')}
        headingLevel="2"
        publishDate={text('Publish Date', '01/01/19')}
      />
    );
  })
  .add('Hero with tag', () => {
    const heroTag = {
      title: text('title', 'Teaser text example'),
      href: text('Link', 'www.mpr.org')
    };
    const imageHero = {
      alt: text('Image alt tag', 'Image alt tag'),
      src: text('Image source url', 'https://source.unsplash.com/weekly?water'),
      srcset: text(
        'Image url for srcset',
        'https://source.unsplash.com/weekly?water'
      )
    };
    return (
      <Hero
        tag={heroTag}
        image={imageHero}
        title={text('Title text', 'Hero Title')}
        subHead="Subhead Text Default"
        headingLevel="2"
        publishDate="01/01/20"
      />
    );
  })
  .add('Hero with image', () => {
    const imageHero = {
      alt: text('Image alt tag', 'Image alt tag'),
      src: text('Image source url', 'https://source.unsplash.com/weekly?water'),
      srcset: text(
        'Image url for srcset',
        'https://source.unsplash.com/weekly?water'
      )
    };
    return (
      <Hero
        image={imageHero}
        title={text('Title text', 'Hero Title')}
        subHead="Subhead Text Default"
        headingLevel="2"
        publishDate="01/01/20"
      />
    );
  })
  .add('Hero with everything', () => {
    const imageHero = {
      alt: text('Image alt tag', 'Image alt tag'),
      src: text('Image source url', 'https://source.unsplash.com/weekly?water'),
      srcset: text(
        'Image url for srcset',
        'https://source.unsplash.com/weekly?water'
      )
    };
    const heroTag = {
      title: 'Teaser text example',
      href: 'www.mpr.org'
    };
    const contributorsTextHero = [
      text('Contributor one name', 'Sally TacoPants'),
      text('Contributor two name', 'Jazzy J')
    ];
    return (
      <Hero
        tag={heroTag}
        image={imageHero}
        contributorsText={contributorsTextHero}
        title={text('Title text', 'Hero Title')}
        subHead="Subhead Text Default"
        headingLevel="2"
        publishDate="01/01/20"
        button="default button"
      />
    );
  });
