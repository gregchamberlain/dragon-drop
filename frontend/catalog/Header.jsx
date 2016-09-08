import React, { PropTypes } from 'react';
import Inputs, { colorToString, shadowToString } from '../util/inputs';
import reactCSS from 'reactcss'

const ALIGNMENTS = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  left: 'flex-start',
  right: 'flex-end',
}

const Header = ({ content, ...props }) => (
  <div style={styles(props).container}>
    <h1>{content}</h1>
  </div>
);


const styles = props => reactCSS({
  'default': {
    container: {
      display: 'flex',
      height: '100%',
      alignItems: ALIGNMENTS[props.verticalAlign],
      justifyContent: ALIGNMENTS[props.horizontalAlign],
      background: props.background,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: colorToString(props.fontColor),
      boxSizing: 'border-box',
      padding: props.padding,
      textShadow: shadowToString(props.textShadow),
    }
  }
})

Header.inputTypes = {
  content: Inputs.string,
  horizontalAlign: Inputs.select("left", "center", "right"),
  verticalAlign: Inputs.select("top", "center", "bottom"),
  background: Inputs.string,
  fontColor: Inputs.color,
  padding: Inputs.number,
  textShadow: Inputs.object({
    xOffset: Inputs.number,
    yOffset: Inputs.number,
    blurRadius: Inputs.number,
    color: Inputs.color,
  })
};

Header.propTypes = {
  content: PropTypes.string,
  horizontalAlign: PropTypes.string,
  verticalAlign: PropTypes.string,
  background: PropTypes.string,
  fontColor: PropTypes.object,
  padding: PropTypes.number,
  textShadow: PropTypes.object
};

Header.defaultProps = {
  content: "Your header here...",
  horizontalAlign: "left",
  verticalAlign: 'top',
  background: 'transparent',
  fontColor: {r: 0, g: 0, b: 0, a: 1},
  padding: 0,
  textShadow: {xOffset: 0, yOffset: 0, blurRadius: 0, color: {r: 0, g: 0, b: 0, a: 0}}
};

export default Header;
