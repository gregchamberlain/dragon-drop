import React, { PropTypes } from 'react';
import Inputs from '../util/inputs';

const Header = ({ content, textAlign }) => (
  <h1 style={{textAlign}}>{content}</h1>
);

export default Header;

Header.inputTypes = {
  content: Inputs.string,
  textAlign: Inputs.select("left", "center", "right"),
};

Header.propTypes = {
  content: PropTypes.string,
  textAlign: PropTypes.string,
};

Header.defaultProps = {
  content: "Your header here...",
  textAlign: "left"
};
