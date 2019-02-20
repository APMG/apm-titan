import React from 'react';
import PropTypes from 'prop-types';
import Inner from './Inner';
import { Link } from '@reach/router';

const Hero = (props) => {
  return (
    <article className="Hero">
      <div className="item_content_hero">
        <div className="item_content_header">
          {/* top level article element is always rendered */}
          {/* Tag is rendered if its prop is passed in. Tag may get its own component */}
          {props.tag && (
            <Link className="tag" to={`/${props.tag.href}`}>
              {/* title renders if the prop is passed in */}
              {props.tag.title && (
                <div className="item_content_title"> {props.tag.title}</div>
              )}
            </Link>
          )}

          {/* contributorsText renders if the prop is passed in */}
          {props.contributorsText && (
            <div className="item_content_contributorsText">
              {props.contributorsText}
            </div>
          )}
          {/* subHead renders if the prop is passed in */}
          {props.subHead && (
            <div className="item_content_subHead">
              <h3>{props.subHead}</h3>
            </div>
          )}
        </div>
      </div>
      {props.href && (
        <Link to={`/${props.href}`}>
          <Inner
            image={props.image}
            button={props.button}
            publishDate={props.publishDate}
          />
        </Link>
      )}
      {!props.href && (
        <Inner
          image={props.image}
          button={props.button}
          publishDate={props.publishDate}
        />
      )}
    </article>
  );
};

Hero.propTypes = {
  button: PropTypes.string,
  contributorsText: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.object.isRequired,
  publishDate: PropTypes.string,
  subHead: PropTypes.string,
  tag: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default Hero;
