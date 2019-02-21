import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { to_sentence, linkFromType } from '../../utils/index';

const Teaser = (props) => {
  const CustomHeader = `h${props.headingLevel}`;
  return (
    <article className="teaser">
      {/* top level article element is always rendered */}
      {/* Tag is rendered if its prop is passed in. Tag may get its own component */}
      {props.tag && (
        <Link className="tag" to={`/${props.tag.href}`}>
          {props.tag.title}
        </Link>
      )}
      <Link to={`${linkFromType(props)}`}>
        {/* image renders if the prop is passed in */}
        {/* image will be made into another component */}
        {props.image && (
          <figure className="item_figure">
            <picture>
              <source
                sizes="(max-width: 840px) 100vw, 66vw"
                srcSet={props.image.srcset}
              />
              <img alt={props.image.alt} src={props.image.src} />
            </picture>
          </figure>
        )}
        <div className="item_content">
          <div className="item_content_header">
            {/* Custom header just renders h1, h2, h3, h4 with the proper hdg-number class depending on heading level prop */}
            <CustomHeader className={`hdg hdg-${props.headingLevel}`}>
              {props.title}
            </CustomHeader>
          </div>
          <div className="item_content_meta">
            {/* publishDate renders if the prop is passed in */}
            {props.publishDate && (
              <time dateTime={props.publishDate}>{props.publishDate}</time>
            )}
            {/* contributors renders if the prop is passed in */}
            {props.contributors && (
              <div className="item_content_contributors">
                By {to_sentence(props.contributors)}
              </div>
            )}
          </div>
          {/* description renders if the prop is passed in */}
          {props.description && (
            <div className="item_content_body userContent">
              {props.description}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};

Teaser.displayName = 'Teaser';
Teaser.defaultProps = {
  context: 'default',
  type: 'button',
  isGroup: false,
  group: false,
  isBlock: false,
  onClick: null,
  style: {}
};
Teaser.propTypes = {
  /** use utility 'to_sentence' */
  contributors: PropTypes.array,
  description: PropTypes.string,
  headingLevel: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.object,
  publishDate: PropTypes.string,
  tag: PropTypes.object,
  title: PropTypes.string.isRequired
  // resourceType: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired
};

export default Teaser;
