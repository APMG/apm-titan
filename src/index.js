import React from 'react';
import { Heading, Button, TagLink, Loading, Body, Content, Event, Header, Hero } from './lib';
import { render } from 'react-dom';
import { data } from './lib/molecules/Hero/test/data/data';

const tag = {
  href: '/the/url/path',
  title: 'this is a title'
};

const App = () => (
  <div>
    <Button>A Button</Button>
    <Heading>A Heading</Heading>
    <TagLink title='A TagLink' href='/the/url/path' tag={tag} />
    <Loading />
    <Body elementClass="content_body" bodyHtml="<h1>Content Header</h1><p>A paragraph too.</p>" />
    <Content title="A Content" />
    <Event title="An Event" bodyHtml="<h1>Event Header</h1><p>A paragraph too.</p>" />
    <Header />
    <Hero image={data.image} title={data.title} />
  </div>
);

render(<App />, document.getElementById('root'));
