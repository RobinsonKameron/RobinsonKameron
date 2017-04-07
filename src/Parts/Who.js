import React, {PropTypes} from 'react';
import whoIs from '../../public/whoIs.jpg';

export default class Who extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='Who'>
        <img src={whoIs} />
      </div>);
  }
}

Who.propTypes = {
};
