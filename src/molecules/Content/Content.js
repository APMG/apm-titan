import React from 'react';
import PropTypes from 'prop-types';
import ContentHeader from './ContentHeader';
import Figure from '../../atoms/Figure/Figure';
import Body from '../Body/Body';

export const Content = ({
  title,
  subtitle,
  authors,
  headingLevel,
  publishDate,
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
          image={image}
          caption={imageCaption}
          credit={imageCredit}
          creditHref={imageCreditHref}
        />
      )}

      {bodyHtml && (
        <div className="col col-content">
          <Body bodyHtml={bodyHtml} />
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
  headingLevel: PropTypes.number,
  publishDate: PropTypes.string,
  subtitle: PropTypes.string,
  bodyHtml: PropTypes.string,
  image: PropTypes.object,
  imageCaption: PropTypes.string,
  imageCredit: PropTypes.string,
  imageCreditHref: PropTypes.string,
  tag: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string
  }),
  title: PropTypes.string.isRequired
};

export default Content;
