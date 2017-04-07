import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav>
      <div className='flex-wrapper'>
        <h1><NavLink activeStyle={{
          fontWeight: 500,
          color: 'rgb(112, 189, 108)'
        }} to='/who'>WHO IS KAM?</NavLink></h1>
        <div className='nav-seperator'>
          <h1>

            <NavLink activeStyle={{
              fontWeight: 500,
              color: 'grey'
            }} to='/about'>About</NavLink>

          </h1>
            &nbsp;
          <h1>

            <NavLink activeStyle={{
              fontWeight: 500,
              color: 'grey'
            }} to='/projects'><span style={{color: 'rgba(18, 38, 142, 0.68)'}}>|</span> Projects</NavLink>

          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
