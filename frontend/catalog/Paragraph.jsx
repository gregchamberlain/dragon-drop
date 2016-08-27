import React, { PropTypes } from 'react';
import Inputs from '../util/inputs';

const Paragraph = ({ content, textAlign }) => (
  <p style={{textAlign}}>{content}</p>
);

export default Paragraph;

Paragraph.inputTypes = {
  content: Inputs.text,
  textAlign: Inputs.select('left', 'center', 'right'),
};

Paragraph.propTypes = {
  content: PropTypes.string,
  textAlign: PropTypes.string,
};

Paragraph.defaultProps = {
  content: "Your content here...",
  textAlign: "left",
};
