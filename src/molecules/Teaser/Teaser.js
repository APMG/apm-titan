import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';
import Button from '../../atoms/Button/Button';
import { toSentence } from '../../utils/index';
import { format } from 'date-fns';

const Teaser = (props) => {
  return (
    <div className="teaser">
      {props.tag && (
        <TagLink
          elementClass="teaser_tagLink"
          to={props.tag.to}
          tagName={props.tag.tagName}
        />
      )}

      {props.audio && (
        <Button size="small" type="primary">
          {props.audioButtonSymbol}
        </Button>
      )}

      <Link to={props.href}>
        <div className="teaser_image">{props.image}</div>

        <div className="teaser_content">
          <div className="teaser_header">
            <Heading
              level={props.headingLevel}
              className={`hdg hdg-${props.headingLevel}`}
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
    </div>
  );
};

Teaser.propTypes = {
  audio: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      credit: PropTypes.string,
      durationHms: PropTypes.any,
      encodings: PropTypes.shape({
        mediaType: PropTypes.string.isRequired,
        filename: PropTypes.string,
        httpFilePath: PropTypes.string.isRequired
      })
    })
  ),
  audioButtonSymbol: PropTypes.any,
  contributors: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
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

Teaser.defaultProps = {
  audioButtonSymbol: 'Play'
};

export default Teaser;
