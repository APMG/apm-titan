import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Figure = ({
  elementClass,
  image,
  caption,
  size,
  position,
  credit,
  creditHref,
  isAmp
}) => {
  const classes = classNames({
    figure: true,
    [`figure-${position}`]: position,
    [`figure-${size}`]: size,
    [elementClass]: elementClass
  });

  const styles = {
    figure: {
      margin: 0
    }
  };

  function captionCredit() {
    if (credit && creditHref) {
      return (
        <a href={creditHref} className="figure_credit">
          {credit}
        </a>
      );
    } else if (credit) {
      return <div className="figure_credit">{credit}</div>;
    }
  }

  return (
    <figure className={classes} style={isAmp ? styles.figure : {}}>
      {image}
      {caption || credit ? (
        <figcaption className="figure_caption">
          {caption && <div className="figure_text">{caption}</div>}
          {captionCredit()}
        </figcaption>
      ) : (
        ''
      )}
    </figure>
  );
};

Figure.defaultProps = {
  size: 'full'
};

Figure.propTypes = {
  elementClass: PropTypes.string,
  image: PropTypes.element.isRequired,
  caption: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
  credit: PropTypes.string,
  creditHref: PropTypes.string,
  isAmp: PropTypes.bool
};

export default Figure;
