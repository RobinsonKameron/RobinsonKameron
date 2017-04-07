import React, { PropTypes } from 'react';

const ImagePanel = (props) => {
  return (
    <aside className='ImagePanel'>
      <img src={props.img} alt={props.alt || null} />
    </aside>
  );
};

export default ImagePanel;
