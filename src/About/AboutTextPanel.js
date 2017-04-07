import React, { PropTypes } from 'react';

const AboutText = (props) => {
  let stories = props.data.myStories.short.map((story) =>
    <p className='ultralight'>
      {story}
    </p>
  );
  return (
    <section className='right-panel'>
      {stories}
    </section>
  );
};

AboutText.propTypes = {
  data: PropTypes.object
};

export default AboutText;
