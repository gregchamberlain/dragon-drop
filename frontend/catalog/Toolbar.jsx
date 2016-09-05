import React, { PropTypes, Component } from 'react';
import Inputs, { colorToString } from '../util/inputs';
import Link from './Link';

const Toolbar = ({left, right, brand, ...style}, { site }) => (
  <div style={styles.container(style)}>
    <Link to={brand.to} text={brand.text === "#site-name" ? site.name : brand.text} style={{...styles.item(style), ...styles.brand}}/>
    {left.map((item, idx) => <Link to={item.to} text={item.text} style={styles.item(style)} key={`left-${idx}`}/>)}
    <div style={styles.space}/>
    {right.map((item, idx) => <Link to={item.to} text={item.text} style={styles.item(style)} key={`right-${idx}`}/>)}
  </div>
);

const styles = {
  container: obj => ({
    width: '100%',
    height: '100%',
    color: colorToString(obj.fontColor),
    background: colorToString(obj.background),
    overflow: 'hidden',
    padding: obj.padding,
    display: 'flex'
  }),
  space: {
    flex: 1
  },
  item: obj => ({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 15px',
    textDecoration: 'none',
    color: colorToString(obj.fontColor),
  }),
  brand: {
    fontWeight: 'bold',
  }
}

Toolbar.contextTypes = {
  site: PropTypes.object
}

Toolbar.propTypes = {
  background: PropTypes.object,
  url: PropTypes.bool,
  fontColor: PropTypes.object,
  padding: PropTypes.number,
  brand: PropTypes.object,
  left: PropTypes.array,
  right: PropTypes.array,
};

Toolbar.defaultProps = {
  background: {r:68, g:68, b:68, a: 1},
  fontColor: {r:238, g:238, b:238, a: 1},
  url: false,
  padding: 0,
  brand: {
    text: "#site-name",
    to: "/"
  },
  left: [],
  right: []
};

const LinkInput = Inputs.object({
  text: Inputs.string,
  to: Inputs.string,
});

Toolbar.inputTypes = {
  background: Inputs.color,
  fontColor: Inputs.color,
  url: Inputs.bool,
  padding: Inputs.number,
  brand: LinkInput,
  left: Inputs.array(LinkInput),
  right: Inputs.array(LinkInput),
};

Toolbar.defaultLayout = {
  minW: 10,
  minH: 2,
  w: 12,
  h: 5
}

export default Toolbar;
