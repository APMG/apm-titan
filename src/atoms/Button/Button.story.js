import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './Button';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Atoms/Button', module);

stories.addDecorator(withKnobs()).addDecorator(withReadme([readme]));

stories
  .add('Button All Props', () => {
    return (
      <Button
        type={select(
          'Type',
          [null, 'primary', 'secondary', 'destructive'],
          null
        )}
        href={select('Href', [null, 'https://example.com', '/page'], null)}
        size={select('Size', [null, 'large', 'small'], null)}
        disabled={select('Disabled', [null, true, false], null)}
        elementClass={text('Custom Class', '')}
        newWindow={select('New window?', [null, true, false], null)}
        submitForm={select('Submit form?', [null, true, false], null)}
      >
        {text('Inner Text', 'Button Text')}
      </Button>
    );
  })
  .add('Button Sizes', () => {
    return (
      <ul className="hList">
        <li>
          <Button>Default Size</Button>
        </li>
        <li>
          <Button size="small">Small Button</Button>
        </li>
        <li>
          <Button size="large">Large Button</Button>
        </li>
      </ul>
    );
  })
  .add('Button Types', () => {
    return (
      <ul className="hList">
        <li>
          <Button>Default Button</Button>
        </li>
        <li>
          <Button type="primary">Primary Action</Button>
        </li>
        <li>
          <Button type="secondary">Secondary Action</Button>
        </li>
        <li>
          <Button type="destructive">Destructive Action</Button>
        </li>
      </ul>
    );
  });
