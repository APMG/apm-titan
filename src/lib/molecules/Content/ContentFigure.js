import React from 'react';
import PropTypes from 'prop-types';
import Figure from '../../atoms/Figure/Figure';

const ContentFigure = (props) => {
  return (
    <>
      {props.image && (
        <Figure
          caption={props.imageCaption}
          credit={props.imageCredit}
          creditHref={props.imageCreditHref}
          image={props.image}
        />
      )}
    </>
  );
};

ContentFigure.propTypes = {
  imageCaption: PropTypes.string,
  imageCredit: PropTypes.string,
  imageCreditHref: PropTypes.string,
  image: PropTypes.object.isRequired
};

export default ContentFigure;
