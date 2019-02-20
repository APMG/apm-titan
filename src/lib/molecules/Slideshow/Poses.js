import React, { Component } from 'react';
import posed from 'react-pose';
import PropTypes from 'prop-types';
import { logic, fadeAnimation } from './animations';
import Slide from './Slide';

class Poses extends Component {
  constructor(props) {
    super(props);

    // fadeAnimation is the default
    this.state = {
      animation: props.animation ? props.animation : fadeAnimation
    };

    this.animationWrapper = posed.div(this.state.animation.states);
  }

  render() {
    return (
      <this.animationWrapper
        className={this.props.elementClass}
        key={this.props.image.index}
        pose={logic(
          this.state.animation.logic,
          this.props.stateIndex,
          this.props.image.index
        )}
      >
        <Slide image={this.props.image} max={this.props.max} />
      </this.animationWrapper>
    );
  }
}

// TODO: outline shape of animation object in propTypes
Poses.propTypes = {
  animation: PropTypes.object,
  elementClass: PropTypes.string.isRequired,
  stateIndex: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  max: PropTypes.number.isRequired
};

export default Poses;
