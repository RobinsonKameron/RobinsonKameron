import React, {PropTypes} from 'react';
import projectGif from '../../public/projects/tempo/tempo.gif';
import ImagePanel from '../Parts/ImagePanel';

export default class Projects extends React.Component {
  render () {
    return (
      <div>
        <ImagePanel img={projectGif} alt='tempo' style={{img: {height: ''}}} />
        <section className='projects-panel-below'>
          <div>
            <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div>
            <h4>Tech stack</h4>
            <ul>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Howler.js</li>
              <li>IBM Bluemix</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

Projects.propTypes = {
};
