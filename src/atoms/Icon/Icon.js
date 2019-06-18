import React from 'react';
import PropTypes from 'prop-types';

import IconEmpty from './IconEmpty';
import IconFacebook from './IconFacebook';
import IconForward from './IconForward';
import IconHeart from './IconHeart';
import IconInstagram from './IconInstagram';
import IconMute from './IconMute';
import IconNext from './IconNext';
import IconPause from './IconPause';
import IconPlay from './IconPlay';
import IconPrevious from './IconPrevious';
import IconReplay from './IconReplay';
import IconSlack from './IconSlack';
import IconTwitter from './IconTwitter';
import IconVolume from './IconVolume';

const icons = {
  empty: IconEmpty,
  facebook: IconFacebook,
  forward: IconForward,
  heart: IconHeart,
  instagram: IconInstagram,
  mute: IconMute,
  next: IconNext,
  pause: IconPause,
  play: IconPlay,
  previous: IconPrevious,
  replay: IconReplay,
  slack: IconSlack,
  twitter: IconTwitter,
  volume: IconVolume
};

const Icon = ({ name, ...rest }) => {
  // Check if the icon is in the list; if not, render the empty icon
  const Element = icons[name] ? icons[name] : icons.empty;

  return <Element {...rest} />;
};

Icon.propTypes = {
  name: PropTypes.string
};

export default Icon;
