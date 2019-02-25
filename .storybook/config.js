import { configure } from '@storybook/react';
import './index.css';
import './table.css';
import '../src/styles/index.scss';

function loadStories() {
  require('../src/lib/atoms/Button/Button.story');
  require('../src/lib/molecules/Content/Content.story');
  require('../src/lib/molecules/Event/Event.story');
  require('../src/lib/molecules/Hero/Hero.story');
  require('../src/lib/molecules/Teaser/Teaser.story');
}

configure(loadStories, module);
