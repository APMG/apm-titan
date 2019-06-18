import React from 'react';
import PropTypes from 'prop-types';
import ContentHeader from './ContentHeader';
import Figure from '../../atoms/Figure/Figure';
import Body from '../Body/Body';

export const Content = ({
  title,
  authors,
  headingLevel,
  publishDate,
  subtitle,
  tag,
  image,
  imageCaption,
  imageCredit,
  imageCreditHref,
  bodyHtml
}) => {
  return (
    <article className="content">
      <div className="col col-page">
        <ContentHeader
          title={title}
          authors={authors}
          headingLevel={headingLevel}
          publishDate={publishDate}
          subtitle={subtitle}
          tag={tag}
        />
      </div>

      {image && (
        <Figure
          caption={imageCaption}
          credit={imageCredit}
          creditHref={imageCreditHref}
          elementClass={'content_figure'}
          image={image}
        />
      )}

      {bodyHtml && (
        <div className="col col-content">
          <Body elementClass="content_body" bodyHtml={bodyHtml} />
        </div>
      )}
    </article>
  );
};

Content.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string
    })
  ),
  bodyHtml: PropTypes.string,
  headingLevel: PropTypes.number,
  image: PropTypes.element,
  imageCaption: PropTypes.string,
  imageCredit: PropTypes.string,
  imageCreditHref: PropTypes.string,
  publishDate: PropTypes.string,
  subtitle: PropTypes.string,
  tag: PropTypes.shape({
    tagName: PropTypes.string,
    to: PropTypes.string
  }),
  title: PropTypes.string.isRequired
};

export default Content;
