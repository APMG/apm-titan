import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';
import { toSentence } from '../../utils/index';
import { format } from 'date-fns';

const Teaser = (props) => {
  return (
    <article className="teaser">
      {props.tag && (
        <TagLink
          elementClass="teaser_tagLink"
          to={props.tag.to}
          tagName={props.tag.tagName}
        />
      )}

      {props.audioPlayButton && (
        <div className="teaser_button">{props.audioPlayButton}</div>
      )}

      <Link to={props.href}>
        <div className="teaser_image">{props.image}</div>

        <div className="teaser_content">
          <div className="teaser_header">
            <Heading
              level={props.headingLevel}
              elementClass={`hdg hdg-${props.headingLevel}`}
            >
              {props.title}
            </Heading>
          </div>
          <div className="teaser_meta">
            {props.publishDate && (
              <time className="teaser_time" dateTime={props.publishDate}>
                {format(props.publishDate, 'MMMM D, YYYY')}
              </time>
            )}
            {props.contributors && (
              <div className="teaser_contributors">
                By {toSentence(props.contributors)}
              </div>
            )}
          </div>
          {props.description && (
            <div className="teaser_body userContent">{props.description}</div>
          )}
        </div>
      </Link>
    </article>
  );
};

Teaser.propTypes = {
  audioPlayButton: PropTypes.node,
  contributors: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  headingLevel: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.object,
  publishDate: PropTypes.string,
  tag: PropTypes.shape({
    to: PropTypes.string.isRequired,
    tagName: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired
};

export default Teaser;
