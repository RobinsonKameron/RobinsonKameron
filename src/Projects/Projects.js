import React from 'react';
import Project from './Project';
import ImagePanel from '../Parts/ImagePanel';
import data from '../../public/data.json';

import tempo from '../../public/projects/tempo/tempo.gif';

// get projects as props [{}, {}, {}] => render UI
const Projects = (props) => {
  return (
    <div className='Wrapper'>
      <ImagePanel img={tempo} alt='tempo' />
      <section className='right-panel'>
        {data.projects.map((project) => <Project data={project} />)}
      </section>
    </div>
  );
};

export default Projects;
