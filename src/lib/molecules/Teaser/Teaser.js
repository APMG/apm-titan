import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../atoms/Link/Link';
import { to_sentence } from '../../utils/index';
import Heading from '../../atoms/Heading/Heading';
import { Image } from 'apm-react-image';

const Teaser = (props) => {
  return (
    <div className="teaser">
      {props.tag && (
        <Link className="tag" to={`/${props.tag.href}`}>
          {props.tag.title}
        </Link>
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
              <time dateTime={props.publishDate}>{props.publishDate}</time>
            )}
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
    </div>
  );
};

Teaser.propTypes = {
  contributors: PropTypes.array,
  description: PropTypes.string,
  headingLevel: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.object,
  publishDate: PropTypes.string,
  tag: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default Teaser;
