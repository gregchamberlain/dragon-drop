import React, { PropTypes, Component } from 'react';
import Inputs from '../util/inputs';
import { Link } from 'react-router';

const DynamicLink = ({ to, text }, { preview }) => (
  <div style={{overflow: 'hidden', height: '100%'}}>
    <Link to={preview ? `preview/${preview}${to}` : to }>{text}</Link>
  </div>
);

DynamicLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string
};

DynamicLink.inputTypes = {
  to: Inputs.string,
  text: Inputs.string,
}

DynamicLink.defaultProps = {
  to: '/',
  text: ""
};

DynamicLink.contextTypes = {
  preview: PropTypes.string
}

export default DynamicLink;
