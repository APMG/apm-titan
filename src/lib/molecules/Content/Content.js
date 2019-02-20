import React from 'react';
import PropTypes from 'prop-types';
import ContentHeader from './ContentHeader';
import ContentFigure from './ContentFigure';
import ContentBody from './ContentBody';

export const Content = (props) => {
  return (
    <article className="content">
      <div className="col col-page">
        <ContentHeader
          title={props.title}
          authors={props.authors}
          headingLevel={props.headingLevel}
          publishDate={props.publishDate}
          subtitle={props.subtitle}
          tag={props.tag}
        />
      </div>

      {props.image && (
        <ContentFigure
          imageCaption={props.imageCaption}
          imageCredit={props.imageCredit}
          imageCreditHref={props.imageCreditHref}
          image={props.image}
        />
      )}

      {props.bodyHtml && (
        <div className="col col-content">
          <ContentBody bodyHtml={props.bodyHtml} />
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
