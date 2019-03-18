import React from 'react';
import PropTypes from 'prop-types';
import ContentHeader from './ContentHeader';
import Figure from '../../atoms/Figure/Figure';
import Body from '../Body/Body';

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
        <Figure
          caption={props.imageCaption}
          credit={props.imageCredit}
          creditHref={props.imageCreditHref}
          elementClass={'content_figure'}
          image={props.image}
        />
      )}

      {props.bodyHtml && (
        <div className="col col-content">
          <Body elementClass="content_body" bodyHtml={props.bodyHtml} />
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
