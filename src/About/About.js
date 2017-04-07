import React from 'react';
// import SocialBar from './SocialBar';
import AboutTextPanel from './AboutTextPanel';
import ImagePanel from '../Parts/ImagePanel';

// static assets
import json from '../../public/data.json';
import kamPhoto from '../../public/castle.jpg';
// import resume from '../../public/resume.jpg';

export default class About extends React.Component {
  render () {
    return (
      <div className='Wrapper' >
        <AboutTextPanel data={json} />
        <ImagePanel img={kamPhoto} alt='Kam-Photo' />

        {/* <SocialBar /><embed src={resume} width="600" height="500" alt="pdf"/> */}
      </div>
    );
  }
}
