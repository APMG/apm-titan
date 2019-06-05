import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Inner from './Inner';

const Hero = (props) => {
  return (
    <article className="Hero">
      <div className="item_content_hero">
        <div className="item_content_header">
          {props.tag && (
            <Link href={`/${props.tag.href}`}>
              <a className="tag">
                {props.tag.title && (
                  <div className="item_content_title"> {props.tag.title}</div>
                )}
              </a>
            </Link>
          )}

          {props.contributorsText && (
            <div className="item_content_contributorsText">
              {props.contributorsText}
            </div>
          )}

          {props.subHead && (
            <div className="item_content_subHead">
              <h3>{props.subHead}</h3>
            </div>
          )}
        </div>
      </div>
      {props.href && (
        <Link href={`/${props.href}`}>
          <a>
            <Inner
              image={props.image}
              button={props.button}
              publishDate={props.publishDate}
            />
          </a>
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
