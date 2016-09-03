import React, { PropTypes, Component } from 'react';
import Inputs from '../util/inputs';

const Article = ({ title, content, textAlign, padding }) => (
  <div style={{textAlign, overflow: 'hidden', padding}}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  textAlign: PropTypes.string,
  padding: PropTypes.number,
};

Article.defaultProps = {
  title: "Sample Title",
  content: "Content goes here...",
  textAlign: "left",
  padding: 0,
};

Article.inputTypes = {
  title: Inputs.string,
  content: Inputs.text,
  textAlign: Inputs.select("left", "center", "right"),
  padding: Inputs.number
};

export default Article;
