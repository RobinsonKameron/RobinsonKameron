import React, { PropTypes } from 'react';

const Project = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Project;
