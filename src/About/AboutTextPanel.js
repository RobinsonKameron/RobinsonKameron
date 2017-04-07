import React, { PropTypes } from 'react';

const AboutText = (props) => {
  let stories = props.data.myStories.map((story) =>
    <p>
      {story}
    </p>
  );
  return (
    <section className='About-Text'>
      {stories}
    </section>
  );
};

export default AboutText;
