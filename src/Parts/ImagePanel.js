import React, { PropTypes } from 'react';

const ImagePanel = (props) => {
  const style = {
    'backgroundImage': `url(${props.img})`
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
