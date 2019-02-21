import React from 'react';
import { Heading, Button, TagLink, Loading, Body, Content, Event, Header, Hero, Teaser, Pagination } from './lib';
import { render } from 'react-dom';
import { data } from './lib/molecules/Hero/test/data/data';
import last from './lib/molecules/Pagination/test/data/last.json';

const tag = {
  href: '/the/url/path',
  title: 'this is a title'
};

let { page, next_page, previous_page } = last;
const { total, count, page_size, total_pages } = last;

const App = () => (
  <div>
    <Button>A Button</Button>
    <Heading level={1}>A Heading</Heading>
    <TagLink title='A TagLink' href='/the/url/path' tag={tag} />
    <Loading />
    <Body elementClass="content_body" bodyHtml="<h1>Content Header</h1><p>A paragraph too.</p>" />
    <Content title="A Content" />
    <Event title="An Event" bodyHtml="<h1>Event Header</h1><p>A paragraph too.</p>" />
    <Header />
    <Hero image={data.image} title={data.title} />
    <Teaser
      id="1234"
      resourceType="story"
      headingLevel={3}
      href="/the/url/path"
      title='This Here Is the Title'
    />
    <Pagination
      total={total}
      count={count}
      page_size={page_size}
      total_pages={total_pages}
      page={page}
      next_page={next_page}
      previous_page={previous_page}
      link_prefix="listen"
      links_to_show={3}
    />
  </div>
);

render(<App />, document.getElementById('root'));
