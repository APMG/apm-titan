import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Figure = (props) => {
  const classes = classNames({
    figure: true,
    [`figure-${props.position}`]: props.position,
    [`figure-${props.size}`]: props.size,
    [props.elementClass]: props.elementClass
  });

  function captionCredit() {
    if (props.credit && props.creditHref) {
      return (
        <a href={props.creditHref} className="figure_credit">
          {props.credit}
        </a>
      );
    } else if (props.credit) {
      return <div className="figure_credit">{props.credit}</div>;
    }
  }

  return (
    <figure className={classes}>
      {props.image}
      {props.caption || props.credit ? (
        <figcaption className="figure_caption">
          {props.caption && <div className="figure_text">{props.caption}</div>}
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
  size: PropTypes.string, // Default "full"
  position: PropTypes.string,
  caption: PropTypes.string,
  credit: PropTypes.string,
  creditHref: PropTypes.string,
  elementClass: PropTypes.string,
  image: PropTypes.element.isRequired
};

export default Figure;
