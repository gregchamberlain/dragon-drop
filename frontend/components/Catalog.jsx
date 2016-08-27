import React from 'react';
import Catalog from '../catalog';
import { connect } from 'react-redux';
import { addItem } from '../actions/item_actions.js';

const CatalogContainerr = ({ addItemCall }) => (
  <div style={styles.container}>
    {Object.keys(Catalog).map(key => (
      <div style={styles.item} key={key} onClick={() => addItemCall(key)}>
        {key}
      </div>
    ))}
  </div>
);

const styles = {
  container: {
    width: 200,
    background: '#888',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    margin: 10,
    background: '#ccc',
    cursor: 'pointer'
  }
};

const mapDispatchToProps = dispatch => ({
  addItemCall: (name) => dispatch(addItem(name)),
});
export default connect(null, mapDispatchToProps)(CatalogContainerr);
