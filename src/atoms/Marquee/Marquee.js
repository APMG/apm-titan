import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AudioPlayerUIContent = (props) => {
  const animationSpeed = 40; // px per second
  const scrollingTitlePadding = 50; // in px; magic-numbery value matching the padding between scrolling titles
  const innerTitleSelector = '#js-scroll-content';

  const [isScrolling, setIsScrolling] = useState(false);
  const [animationStyle, setAnimationStyle] = useState({
    animationDuration: '5s'
  });
  const titleRef = useRef();

  const classes = classNames({
    marquee: true,
    'is-scrolling': isScrolling
  });

  // Turns scrolling animation on and off
  const animate = () => {
    const titleEl = titleRef.current;

    if (!titleEl) return;

    if (
      titleEl.parentElement.offsetWidth < getTitleWidth() &&
      context.isAudioPlaying
    ) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  // Determines how fast to scroll based on the title width
  const setScrollSpeed = (titleWidth) => {
    const combinedWidth = titleWidth + scrollingTitlePadding;
    const duration = `${combinedWidth / animationSpeed}s`;
    setAnimationStyle({ animationDuration: duration });
  };

  // Return the DOM width of the title text
  const getTitleWidth = () => {
    return titleRef.current.querySelector(innerTitleSelector).offsetWidth;
  };

  // Only runs when audio is played/paused
  useEffect(() => {
    animate();
    window.addEventListener('resize', animate);

    // remove the event listener on unmount
    return () => {
      window.removeEventListener('resize', animate);
    };
  }, [context.isAudioPlaying]);

  // Only runs when the title prop changes
  useEffect(() => {
    if (!titleRef.current) return;
    setScrollSpeed(getTitleWidth());
  }, [props.title]);

  return (
    <div
      className="marquee"
      style={animationStyle}
      ref={titleRef}
      data-title={props.title}
    >
      <span className="marquee_inner" id="js-scroll-content">
        {props.children}
      </span>
    </div>
  );
};

AudioPlayerUIContent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default AudioPlayerUIContent;
