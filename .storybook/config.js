import { configure } from '@storybook/react';
import './index.css';
import './table.css';
import '../src/styles/index.scss';

//load all stories within stories folder
const req = require.context('../src', true, /(\.|\/)story\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
