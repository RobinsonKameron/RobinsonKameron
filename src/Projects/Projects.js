import React from 'react';
import projectGif from '../../public/projects/tempo/tempo.gif';
import ImagePanel from '../Parts/ImagePanel';

// get projects as props [{}, {}, {}] => render UI
const Projects = (props) => {
  return (
    <div className='Wrapper'>
      <ImagePanel img={projectGif} alt='tempo' />
      <section className='right-panel'>
        <div>
          <h3>About</h3>
          <p>
            Temp° is the intersection of music, tech, data, and motion: a perfect metaphor for the SXSW experience!
            This experience was designed and developed by an IBM Maelstrom team. Using inspiration from the core experiences of the Weather Underground app, our team of 11 interns conceptualized, designed and built the experience in only four and a half days.
          </p>
        </div>

        <div>
          <h3>Tech stack</h3>
          <ul>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Web Audio</li>
            <li>Howler.js</li>
            <li>Canvas</li>
            <li>IBM Bluemix</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Projects;
