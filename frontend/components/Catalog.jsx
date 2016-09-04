import React from 'react';
import Catalog from '../catalog';
import { connect } from 'react-redux';
import { createComponent } from '../actions/component_actions';
import { parsePageId } from '../util/router_utils';

const CatalogContainerr = ({ create }) => (
  <div style={styles.container}>
    {Object.keys(Catalog).map(key => (
      <div style={styles.item} key={key} onClick={() => create(key)}>
        {key}
      </div>
    ))}
  </div>
);

const styles = {
  container: {
    width: '100%'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    margin: '10px 0',
    background: '#ccc',
    cursor: 'pointer'
  }
};

const makeComponent = name => ({
  name: name,
  layout: {
    x: 0,
    y: 0, // puts it at the bottom
    w: 4,
    h: 6,
  },
  props: Catalog[name].defaultProps
});

const mapDispatchToProps = (dispatch, { params }) => ({
  create: (name) => dispatch(createComponent(parsePageId(params), makeComponent(name))),
});
export default connect(null, mapDispatchToProps)(CatalogContainerr);
