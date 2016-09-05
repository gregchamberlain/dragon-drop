import React, { PropTypes, Component } from 'react';
import Inputs from '../util/inputs';

const Toolbar = ({ background, padding, left, right, fontColor }) => (
  <div style={styles.container({background, padding, fontColor})}>
    {left.map((item, idx) => <div key={`left-${idx}`} style={styles.item}>{item}</div>)}
    <div style={styles.space}/>
    {right.map((item, idx) => <div key={`right-${idx}`} style={styles.item}>{item}</div>)}
  </div>
);

const styles = {
  container: obj => ({
    width: '100%',
    height: '100%',
    color: obj.fontColor,
    background: obj.background,
    overflow: 'hidden',
    padding: obj.padding,
    display: 'flex'
  }),
  space: {
    flex: 1
  },
  item: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 15px'
  }
}

Toolbar.propTypes = {
  background: PropTypes.string,
  fontColor: PropTypes.string,
  padding: PropTypes.number,
  left: PropTypes.array,
  right: PropTypes.array,
};

Toolbar.defaultProps = {
  background: '#444',
  fontColor: '#eee',
  padding: 0,
  left: [],
  right: []
};

Toolbar.inputTypes = {
  background: Inputs.string,
  fontColor: Inputs.string,
  padding: Inputs.number,
  left: Inputs.array(Inputs.string),
  right: Inputs.array(Inputs.string),
};

Toolbar.defaultLayout = {
  minW: 10,
  minH: 2,
  w: 12,
  h: 3
}

export default Toolbar;
