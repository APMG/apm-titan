import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const Inner = (props) => (
  <>
    <figure className="item_figure">
      <picture>
        <source
          sizes="(max-width: 840px) 100vw, 66vw"
          srcSet={props.image.srcset}
        />
        <img alt={props.image.alt} src={props.image.src} />
      </picture>
    </figure>
    <div className="item_content_meta">
      {props.publishDate && (
        <time dateTime={props.publishDate}>
          {format(props.publishDate, 'MMMM D, YYYY')}
        </time>
      )}
    </div>

    {/* TODO: Need to disscuss this more to determine the direction of
            what we want to do about the button */}
    {props.button && <div className="item_content_button">{props.button}</div>}
  </>
);

Inner.propTypes = {
  button: PropTypes.string,
  image: PropTypes.object.isRequired,
  publishDate: PropTypes.string
};

export default Inner;
