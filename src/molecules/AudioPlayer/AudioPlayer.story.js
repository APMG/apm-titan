import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import AudioPlayer from './AudioPlayer';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('AudioPlayer', module);

const audioAudioPlayer = {
  source: text(
    'Audio source',
    'https://play.publicradio.org/web/o/minnesota/podcasts/brains_on/2018/08/07/brainson_20180807_134_128.mp3'
  ),
  title: text('Audio title', 'Burning rivers of fire')
};

stories
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator(withReadme([readme]));

stories.add('AudioPlayer All', () => {
  return (
    <AudioPlayer
      audio={audioAudioPlayer}
      audiolabel={text('Audio Label', 'Listen')}
      audioSubhead={text('Audio Subhead', 'Terrible Thanks For Asking')}
      forward={number('Foward Seconds', 10)}
      replay={number('Replay Seconds', 10)}
      audioPlaylist={true}
      audioActiveBars={true}
      audioVolume={true}
    />
  );
});

stories.add('AudioPlayer w/ audioSubhead', () => {
  return <AudioPlayer audio={audioAudioPlayer} audioSubhead={'Brains On'} />;
});

stories.add('AudioPlayer w/ Volume', () => {
  return <AudioPlayer audio={audioAudioPlayer} audioVolume={true} />;
});

stories.add('AudioPlayer w/ Audio Active Bars', () => {
  return <AudioPlayer audio={audioAudioPlayer} audioActiveBars={true} />;
});

stories.add('AudioPlayer w/ Forward and Replay', () => {
  return <AudioPlayer audio={audioAudioPlayer} forward={10} replay={10} />;
});
