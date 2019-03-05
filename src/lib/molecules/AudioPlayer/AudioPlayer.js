import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'webpack-zepto';
import Player from 'apm-html5-player';
import FormatTime from 'apm-html5-player/script/FormatTime';
import AudioAnalytics from 'apm-html5-player/script/AudioAnalytics';
import IconPlay from '../../atoms/svg/IconPlay.js';
import IconPause from '../../atoms/svg/IconPause.js';
import IconPrevious from '../../atoms/svg/IconPrevious.js';
import IconNext from '../../atoms/svg/IconNext.js';
import IconReplay from '../../atoms/svg/IconReplay.js';
import IconForward from '../../atoms/svg/IconForward.js';
import IconVolume from '../../atoms/svg/IconVolume.js';
import IconMute from '../../atoms/svg/IconMute.js';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    // Initialize time formatter for player
    this.formatTime = new FormatTime();
    this.apmPlayer = null;
    this.state = {
      audio: {
        source:
          'https://play.publicradio.org/web/o/minnesota/podcasts/brains_on/2018/08/07/',
        title: 'title'
      },
      audioSubhead: null,
      forward: null,
      replay: null,
      audioPlaylist: false,
      audioPlaying: false,
      audioVolume: false,
      audioActiveBars: false,
      audiolabel: 'Listen:',
      audioElementRef: (el) => (this.audioElement = el)
    };
  }
  componentDidMount() {
    this.checkForAudio();
    const trackAudioAnalytics = document.getElementById('main-audio');
    const analytics = new AudioAnalytics();
    this.apmPlayer = new Player($, $(this.player), this.formatTime).init();
    analytics.init({ audio: trackAudioAnalytics });
    this.audioElement.onplay = this.onAudioPlay;
    this.audioElement.onpause = this.onAudioPause;
  }
  checkForAudio() {
    this.setState({
      audio: {
        source: this.props.audio.source,
        title: this.props.audio.title
      },
      audioSubhead: this.props.audioSubhead,
      audioPlaylist: this.props.audioPlaylist,
      audioPlaying: this.props.audioPlaying,
      audiolabel: this.props.audiolabel
    });
  }
  // Handle Audio Change if Multiple Players on Site
  onAudioPlayerChange = (shouldPlay, audioPlaying, audio) => {
    if (shouldPlay) {
      // Replace elements of audio state that are passed in, retain the rest
      this.setState({
        ...this.state,
        audio: { ...this.state.audio, ...audio }
      });
      // If this element has already been loaded, play it right now
      this.audioElement.play(audio);
    }
    if (audioPlaying !== false) {
      this.setState({ ...this.state, ...audio });
      this.audioElement.play(audio);
    } else {
      this.setState({ ...this.state, audioPlaying: false });
      this.audioElement.pause(audio);
    }
  };
  //Audio player event handler play
  onAudioPlay = (audio) => {
    if (audio) {
      this.setState({
        ...this.state,
        audioPlaying: this.audioElement.src,
        playerVisible: true
      });
    }
  };
  //Audio player event handler pause
  onAudioPause = (audio) => {
    if (audio) {
      this.setState({ ...this.state, audioPlaying: false });
    }
  };
  // TO DO: Check for playlist
  // if playlist show skip and forward buttons
  render() {
    const { audioElementRef } = this.state;
    const {
      audio,
      audioSubhead,
      audiolabel,
      audioPlaylist,
      audioPlaying,
      audioVolume,
      audioActiveBars,
      forward,
      replay
    } = this.props;
    return (
      <div
        id="player"
        className="player js-player"
        ref={(player) => {
          this.player = player;
        }}
        data-src={audio.source}
      >
        <audio
          id="main-audio"
          preload="metadata"
          onLoadedMetadata={() => {
            this.apmPlayer.playAudio();
          }}
          src={audio.source}
          ref={audioElementRef}
        />
        <div className="player_wrapper">
          <div className="player_wrapper_content">
            <div className="player_content">
              <div className="player_label js-player-label">{audiolabel}</div>
              <div className="player_title js-player-title">{audio.title}</div>
              <div className="player_subhead">{audioSubhead}</div>
            </div>
            <div className="player_timeWrapper">
              <div className="player_time player_time-current">
                <span
                  className={`player_time_current js-player-currentTime ${
                    !audioPlaying ? 'is-hidden' : ''
                  }`}
                >
                  0:00
                </span>
              </div>
              <div className="player_timeline js-player-timeline">
                <div className="player_timeline_progress js-player-progress" />
                <div className="player_timeline_buffered js-player-buffered" />
                <div className="player_timeline_loading" />
              </div>
              <div className="player_time player_time-right player_time-duration">
                <span
                  className={`player_time_duration js-player-duration ${
                    !audioPlaying ? '' : 'is-hidden'
                  }`}
                >
                  0:00
                </span>
              </div>
            </div>
          </div>

          <div className="player_controls">
            <button
              className={`player_btn player_btn-medium ${
                audioPlaylist ? '' : 'invisible'
              }`}
              type="button"
            >
              <span className="player_previous">
                <IconPrevious />
                <span className="invisible">Previous</span>
              </span>
            </button>
            <button
              className={`player_btn player_btn-medium ${
                replay ? '' : 'invisible'
              }`}
              type="button"
              data-skip-back={replay}
            >
              <span className="player_replay">
                <IconReplay />
                <span className="invisible">Replay 10 Seconds</span>
              </span>
            </button>

            <button
              className="player_btn player_btn-large player_btn-playpause js-player-play"
              type="button"
            >
              <span className="player_play">
                <IconPlay />
                <span className="invisible">Play</span>
              </span>
              <span className="player_pause">
                <IconPause />
                <span className="invisible">Pause</span>
              </span>
            </button>
            <button
              className={`player_btn player_btn-medium ${
                forward ? '' : 'invisible'
              }`}
              type="button"
              data-skip-forward={forward}
            >
              <span className="player_forward">
                <IconForward />
                <span className="invisible">Forward 10 Seconds</span>
              </span>
            </button>

            <button
              className={`player_btn player_btn-medium ${
                audioPlaylist ? '' : 'invisible'
              }`}
              type="button"
            >
              <span className="player_next">
                <IconNext />
                <span className="invisible">Next</span>
              </span>
            </button>
          </div>
          <div
            className={`player_controls player_controlsSecondary ${
              audioVolume || audioActiveBars ? '' : 'invisible'
            }`}
          >
            <button
              className="player_btn player_button-small js-player-mute"
              type="button"
            >
              <span
                className={`player_volume player_btn-medium ${
                  audioVolume ? '' : 'invisible'
                }`}
              >
                <IconVolume />
                <span className="invisible">Volume</span>
              </span>
              <span className="player_mute player_btn-medium">
                <IconMute />
                <span className="invisible">Mute Sound</span>
              </span>
            </button>
            <div
              className={`player-wave player_btn-medium ${
                audioActiveBars ? '' : 'invisible'
              }`}
            >
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AudioPlayer.defaultProps = {
  audiolabel: 'Listen:',
  audioPlaying: false,
  audioVolume: false,
  audioActiveBars: false
};

AudioPlayer.propTypes = {
  /** Object has 'source:' and 'title:'  */
  audio: PropTypes.object.isRequired,
  audioSubhead: PropTypes.string,
  audioPlaying: PropTypes.bool,
  audioVolume: PropTypes.bool,
  audioActiveBars: PropTypes.bool,
  audiolabel: PropTypes.string,
  forward: PropTypes.number,
  replay: PropTypes.number,
  /** If playlist, show forward and back icons */
  audioPlaylist: PropTypes.bool
};

export default AudioPlayer;
