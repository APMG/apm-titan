import React from 'react';
import { render, cleanup } from 'react-testing-library';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  audio: {
    source:
      'https://play.publicradio.org/web/o/minnesota/podcasts/brains_on/2018/08/07/brainson_20180807_134_128.mp3',
    title: 'this is a title'
  },
  audioSubhead: 'Brains On',
  forward: '15',
  replay: '15',
  audioPlaylist: 'true',
  audioPlaying: false,
  audioVolume: 'true',
  audioActiveBars: 'true',
  audiolabel: 'Listen:'
};

describe('AudioPlayer component', () => {

  it('renders the audioplayer component with audio and title',() =>{
    let audio = [
      {
        source:
        'https://play.publicradio.org/web/o/minnesota/podcasts/brains_on/2018/08/07/brainson_20180807_134_128.mp3',
      title: 'this is a title'
      }
    ]
    props = {
      audio,
      audioSubhead: 'Brains On',
      forward: '15',
      replay: '15',
      audioPlaylist: 'true',
      audioPlaying: false,
      audioVolume: 'true',
      audioActiveBars: 'true',
      audiolabel: 'Listen:'
    }
    const { container } = render(<AudioPlayer {...props} />)
    const audioNode = container.querySelectorAll('#main-audio')
    expect(audioNode.length).toBe(props.audio.length)
  })

});


