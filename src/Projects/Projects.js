import React from 'react';
import Project from './Project';

import data from '../../public/data.json';

import tempo from '../../public/projects/tempo/tempo.gif';
import youmeWorld from '../../public/projects/youme.world/youmeWorld.png';
import temere from '../../public/projects/temere/temere.png';

// get projects as props [{}, {}, {}] => render UI
const Projects = (props) => {
  return (
    <div>
      {data.projects.map((project) => <Project data={project} />)}
    </div>
  );
};

export default Projects;
