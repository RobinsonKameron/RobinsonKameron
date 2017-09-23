import React, { PropTypes } from 'react';

const AboutText = ({ data, children }) => {
  return (
    <section className='right-panel'>
      <p style={{ 'fontSize': '2em', 'margin': '0'}}>Hi there i'm KAM!</p>
      {data.myStories.short.map((story) =>
        <p style={{ 'fontSize': '1.4em', 'margin': '0'}} className='ultralight'>
          {story}
        </p>
      )}
      {children}
    </section>
  );
};

AboutText.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default AboutText;
