import React, { PropTypes } from 'react';
import {
  Link
} from 'react-router-dom';

const Header = (props) => {
  return (
    <nav>
      <div className='flex-wrapper'>
        <h1><Link to='/who'>WHO IS KAM?</Link></h1>
        <div className='nav-seperator'>
          <h1><Link to='/about'>About</Link></h1> &nbsp;&nbsp;
          <h1><Link to='/projects'>Projects</Link></h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
