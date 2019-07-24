import React from 'react';
import PropTypes from 'prop-types';

const HeroInner = ({ image, publishDate, button }) => (
  <>
    <figure className="item_figure">
      <picture>
        <source sizes="(max-width: 840px) 100vw, 66vw" srcSet={image.srcset} />
        <img alt={image.alt} src={image.src} />
      </picture>
    </figure>
    {publishDate && <div className="item_content_meta">{publishDate}</div>}

    {/* TODO: Need to disscuss this more to determine the direction of
            what we want to do about the button */}
    {button && <div className="item_content_button">{button}</div>}
  </>
);

HeroInner.propTypes = {
  button: PropTypes.string,
  image: PropTypes.object.isRequired,
  publishDate: PropTypes.string
};

export default HeroInner;
