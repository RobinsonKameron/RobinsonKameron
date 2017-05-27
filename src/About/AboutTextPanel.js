import React, { PropTypes } from 'react';

const AboutText = ({ data }) => {
  return (
    <section className='right-panel'>
      <p style={{ 'fontSize': '2em', 'margin': '0'}}>Hi there i'm KAM!</p>
      {data.myStories.short.map((story) =>
        <p style={{ 'fontSize': '1.4em', 'margin': '0'}} className='ultralight'>
          {story}
        </p>
      )}
    </section>
  );
};

AboutText.propTypes = {
  data: PropTypes.object
};

export default AboutText;
