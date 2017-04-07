import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav>
      <div className='flex-wrapper'>
        <h1><NavLink activeStyle={{
          fontWeight: 'bold',
          color: 'rgb(112, 189, 108)'
        }} to='/who'>WHO IS KAM?</NavLink></h1>
        <div className='nav-seperator'>
          <h1>

            <NavLink activeStyle={{
              fontWeight: 'bold',
              color: 'rgb(136, 136, 136)'
            }} to='/about'>About</NavLink>

          </h1>
            &nbsp;
          <h1>

            <NavLink activeStyle={{
              fontWeight: 'bold',
              color: 'rgb(136, 136, 136)'
            }} to='/projects'>Projects</NavLink>

          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
