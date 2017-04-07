import React, {PropTypes} from 'react';
import SocialBar from './SocialBar';
import AboutTextPanel from './AboutTextPanel';
import ImagePanel from '../Parts/ImagePanel';

// static assets
import json from '../../public/data.json';
import kamPhoto from '../../public/castle.jpg';
// import resume from '../../public/resume.jpg';

export default class About extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='Wrapper'>
        <ImagePanel img={kamPhoto} alt='Kam-Photo' />
        <AboutTextPanel data={json} />
        {/* <SocialBar /><embed src={resume} width="600" height="500" alt="pdf"/> */}
      </div>
    );
  }
}

About.propTypes = {
};
