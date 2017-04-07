import React, { PropTypes } from 'react';

const ImagePanel = (props) => {
  const style = {
    'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${props.img})`
  };
  return (
    <aside className='ImagePanel' style={style} />
  );
};

ImagePanel.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string
};

export default ImagePanel;
