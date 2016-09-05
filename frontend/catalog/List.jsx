import React, { PropTypes } from 'react';
import Inputs from '../util/inputs';

const List = ({ items }) => (
  <div style={{width: '100%', height: '100%',  position: 'absolute'}}>
    <ul>
      {items.map((item, idx) => <li key={`${item}${idx}`}>{item}</li>)}
    </ul>
  </div>
);

export default List;

List.inputTypes = {
  items: Inputs.array(Inputs.string)
};

List.propTypes = {
  items: PropTypes.array
};

List.defaultProps = {
  items: ["item1", "item2"]
};
