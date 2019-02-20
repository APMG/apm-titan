import React from 'react';
import PropTypes from 'prop-types';

const Figure = (props) => {
  return (
    <figure className={`figure figure-${props.layout ? props.layout : 'full'}`}>
      {/* TODO: Use Image component/atom for this img so it can include srcset */}
      <img src={props.image.src} alt={props.image.alt} />
      {props.caption || props.credit ? (
        <figcaption className="figure_caption">
          {props.caption && <div className="figure_text">{props.caption}</div>}
          {props.credit && props.creditHref ? (
            <a href={props.creditHref} className="figure_credit">
              {props.credit}
            </a>
          ) : (
            <div className="figure_credit">{props.credit}</div>
          )}
        </figcaption>
      ) : (
        ''
      )}
    </figure>
  );
};

Figure.propTypes = {
  layout: PropTypes.string, // Default "full"
  caption: PropTypes.string,
  credit: PropTypes.string,
  creditHref: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
};

export default Figure;
