import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';
import Button from '../../atoms/Button/Button';
import { to_sentence } from '../../utils/index';
import { Image } from 'apm-react-image';
import { format } from 'date-fns';

const Teaser = (props) => {
  return (
    <div className="teaser">
      {props.tag && <TagLink href={props.tag.href} title={props.tag.title} />}

      {props.audio && (
        <Button size="small" type="primary">
          {props.audioButtonSymbol}
        </Button>
      )}

      <Link to={props.href}>
        {props.image && <Image image={props.image} />}

        <div className="item_content">
          <div className="item_content_header">
            <Heading
              level={props.headingLevel}
              className={`hdg hdg-${props.headingLevel}`}
            >
              {props.title}
            </Heading>
          </div>
          <div className="item_content_meta">
            {props.publishDate && (
              <time dateTime={props.publishDate}>
                {format(props.publishDate, 'MMMM D, YYYY')}
              </time>
            )}
            {props.contributors && (
              <div className="item_content_contributors">
                By {to_sentence(props.contributors)}
              </div>
            )}
          </div>
          {props.description && (
            <div className="item_content_body userContent">
              {props.description}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

Teaser.propTypes = {
  audio: PropTypes.shape({
    title: PropTypes.string,
    credit: PropTypes.string,
    durationHms: PropTypes.any,
    encodings: {
      mediaType: PropTypes.string.isRequired,
      filename: PropTypes.string,
      httpFilePath: PropTypes.string.isRequired
    }
  }),
  audioButtonSymbol: PropTypes.any,
  contributors: PropTypes.array,
  description: PropTypes.string,
  headingLevel: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.object,
  publishDate: PropTypes.string,
  tag: PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired
};

Teaser.defaultProps = {
  audioButtonSymbol: 'Play'
};

export default Teaser;
