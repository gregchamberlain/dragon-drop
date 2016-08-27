import React, { PropTypes, Component } from 'react';
import Inputs from '../util/inputs';

const Article = ({ title, content, textAlign }) => (
  <div style={{textAlign}}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  textAlign: PropTypes.string,
};

Article.defaultProps = {
  title: "Sample Title",
  content: "Content goes here...",
  textAlign: "left",
};

Article.inputTypes = {
  title: Inputs.string,
  content: Inputs.text,
  textAlign: Inputs.select("left", "center", "right"),
};

export default Article;
