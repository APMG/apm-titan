import { cleanup } from '@testing-library/react';
import AudioPlayer from './AudioPlayer';

//Mock the AudioPlayer component
jest.mock('./AudioPlayer');

//Mock the AudioPlayer props
const audioProps = {
  _audioVolume: false,
  _audioPlaying: false,
  _audioSubhead: null,
  _forward: null,
  _replay: null,
  _audioActiveBars: false,
  _audioLabel: 'Listen',

  set audioVolume(value) {
    this._audioVolume = value;
  },
  get audioVolume() {
    return this._audioVolume;
  },
  set audioPlaying(value) {
    this._audioPlaying = value;
  },
  get audioPlaying() {
    return this._audioPlaying;
  },
  set audioSubhead(value) {
    this._audioSubhead = value;
  },
  get audioSubhead() {
    return this._audioSubhead;
  },
  set forward(value) {
    this._forward = value;
  },
  get forward() {
    return this._forward;
  },
  set replay(value) {
    this._replay = value;
  },
  get replay() {
    return this._replay;
  },
  set audioActiveBars(value) {
    this._audioActiveBars = value;
  },
  get audioActiveBars() {
    return this._audioActiveBars;
  },
  set audioLabel(value) {
    this._audioLabel = value;
  },
  get audioLabel() {
    return this._audioLabel;
  }
};

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  AudioPlayer.mockClear();
});

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

//Check AudioPlayer props

test('plays audio', () => {
  const spy = jest.spyOn(audioProps, 'audioPlaying', 'set');
  audioProps.audioPlaying = 'song.mp3';

  expect(spy).toHaveBeenCalled();
  expect(audioProps.audioPlaying).toBe('song.mp3');

  spy.mockRestore();
});

test('set audio volume', () => {
  const spy = jest.spyOn(audioProps, 'audioVolume', 'set');
  audioProps.audioVolume = 100;

  expect(spy).toHaveBeenCalled();
  expect(audioProps.audioVolume).toBe(100);

  spy.mockRestore();
});

test('set audioSubhead prop', () => {
  const spy = jest.spyOn(audioProps, 'audioSubhead', 'set');
  audioProps.audioSubhead = 'Live From Here';

  expect(spy).toHaveBeenCalled();
  expect(audioProps.audioSubhead).toBe('Live From Here');

  spy.mockRestore();
});

test('set seconds for forward prop', () => {
  const spy = jest.spyOn(audioProps, 'forward', 'set');
  audioProps.forward = 15;

  expect(spy).toHaveBeenCalled();
  expect(audioProps.forward).toBe(15);

  spy.mockRestore();
});

test('set seconds for replay prop', () => {
  const spy = jest.spyOn(audioProps, 'replay', 'set');
  audioProps.replay = 15;

  expect(spy).toHaveBeenCalled();
  expect(audioProps.replay).toBe(15);

  spy.mockRestore();
});

test('set the audioActiveBars prop to show audio active bars', () => {
  const spy = jest.spyOn(audioProps, 'audioActiveBars', 'set');
  audioProps.audioActiveBars = true;

  expect(spy).toHaveBeenCalled();
  expect(audioProps.audioActiveBars).toBe(true);

  spy.mockRestore();
});

test('set the audioLabel prop update the audio label with new text', () => {
  const spy = jest.spyOn(audioProps, 'audioLabel', 'set');
  audioProps.audioLabel = 'On Air';

  expect(spy).toHaveBeenCalled();
  expect(audioProps.audioLabel).toBe('On Air');

  spy.mockRestore();
});
