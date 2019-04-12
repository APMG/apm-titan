import React from 'react';
import { Link } from '@reach/router'; // eslint-disable-line
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import data from './test/data/data.json';
import Pagination from './Pagination';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Atoms/Pagination', module);

const testPropsLarge = {
  hasFirstAndLast: true,
  linksToShow: 5,
  linkPrefix: 'episodes',
  currentPage: data.episodesList.results.currentPage,
  elementsPerPage: data.episodesList.results.items.length,
  totalElements: data.episodesList.results.totalItems
};

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories.add('Pagination', () => {
  return (
    <Pagination
      hasFirstAndLast={boolean(
        'Has First & Last',
        testPropsLarge.hasFirstAndLast
      )}
      linksToShow={number('Links to Show', testPropsLarge.linksToShow)}
      linkPrefix={testPropsLarge.linkPrefix}
      currentPage={number('Current Page', testPropsLarge.currentPage)}
      elementsPerPage={number(
        'Elements Per Page',
        testPropsLarge.elementsPerPage
      )}
      totalElements={number('Total Elements', testPropsLarge.totalElements)}
    />
  );
});
