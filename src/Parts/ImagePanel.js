import React, { PropTypes } from 'react';

const ImagePanel = (props) => {
  const style = {
    'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, .5)), url(${props.img})`
  };
  return (
    <aside className='ImagePanel' style={style} id={(props.id) ? props.id : null} />
  );
};

ImagePanel.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string
};

export default ImagePanel;
