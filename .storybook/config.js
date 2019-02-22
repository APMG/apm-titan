import { configure } from '@storybook/react';
import './index.css';
// styles/index.css is manually generated with this VSCode plugin (https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) because idek, it's only needed for documentation here
import '../styles/index.css';
import './table.css';

function loadStories() {
  require('../src/lib/atoms/Button/Button.story');
  require('../src/lib/molecules/Content/Content.story');
  require('../src/lib/molecules/Event/Event.story');
  require('../src/lib/molecules/Hero/Hero.story');
  require('../src/lib/molecules/Teaser/Teaser.story');
}

configure(loadStories, module);