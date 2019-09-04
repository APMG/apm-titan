import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link';
import HeroInner from './HeroInner';

const Hero = ({
  tag,
  contributorsText,
  subHead,
  href,
  image,
  button,
  publishDate
}) => {
  return (
    <article className="Hero">
      <div className="item_content_hero">
        <div className="item_content_header">
          {tag && (
            <Link href={`/${tag.href}`} className="tag">
              {tag.title && (
                <div className="item_content_title"> {tag.title}</div>
              )}
            </Link>
          )}

          {contributorsText && (
            <div className="item_content_contributorsText">
              {contributorsText}
            </div>
          )}

          {subHead && (
            <div className="item_content_subHead">
              <h3>{subHead}</h3>
            </div>
          )}
        </div>
      </div>
      {href && (
        <Link href={`/${href}`}>
          <HeroInner image={image} button={button} publishDate={publishDate} />
        </Link>
      )}
      {!href && (
        <HeroInner image={image} button={button} publishDate={publishDate} />
      )}
    </article>
  );
};

Hero.propTypes = {
  button: PropTypes.string,
  contributorsText: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.object.isRequired,
  publishDate: PropTypes.node,
  subHead: PropTypes.string,
  tag: PropTypes.object
};

export default Hero;
