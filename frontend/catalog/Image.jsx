import React, { PropTypes } from 'react';
import Inputs from '../util/inputs';

const Image = ({ url, padding }) => (
  <div style={{padding, width: '100%', height: '100%',  position: 'absolute'}}>
    <div style={{backgroundRepeat: 'no-repeat', background: `url(${url})`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center'}}/>
  </div>
);
// const Image = ({ url }) => (
//   <img src={url} alt="" width="100%" height="100%"/>
// );

export default Image;

Image.inputTypes = {
  url: Inputs.string,
  padding: Inputs.number,
};

Image.propTypes = {
  url: PropTypes.string,
  padding: PropTypes.number,
};

Image.defaultProps = {
  url: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg',
  padding: 0,
};
