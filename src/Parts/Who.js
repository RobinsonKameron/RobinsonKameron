import React, { PropTypes } from 'react';
import whoIs from '../../public/whoIs.jpg';

const Who = (props) => {
  return (
    <div className='Who'>
      <img src={whoIs} alt='who is Kam?' />
    </div>
  );
};

Who.propTypes = {
  whoIs: PropTypes.string
};

export default Who;
