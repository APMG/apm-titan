import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import data from './__testdata__/pagination.json';
import Pagination from './Pagination';

const stories = storiesOf('Atoms/Pagination', module);

const testPropsLarge = {
  hasFirstAndLast: true,
  linksToShow: 5,
  linkPrefix: 'episodes',
  currentPage: data.episodesList.results.currentPage,
  elementsPerPage: data.episodesList.results.items.length,
  totalElements: data.episodesList.results.totalItems
};

stories.addDecorator(withKnobs);

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
