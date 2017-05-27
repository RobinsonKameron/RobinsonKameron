import React, {PropTypes} from 'react';
import ImagePanel from '../Parts/ImagePanel';

const Project = (props) => {
  return (
    <div className='Wrapper'>
      <ImagePanel img={props.data.img} />
      <section className='right-panel'>
        <div>
          <h3>About</h3>
          <p>
            {props.data.about}
          </p>
        </div>

        <div>
          <h3>Tech stack</h3>
          <ul>
            {props.data.tech.map((t) => <li>{t}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Project;
