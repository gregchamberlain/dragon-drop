import React from 'react';
import Catalog from '../catalog';
import { connect } from 'react-redux';
import { closeCatalog } from '../actions/editor_actions';
import { createComponent } from '../actions/component_actions';
import { parsePageId } from '../util/router_utils';
import { merge } from 'lodash';

const CatalogContainerr = ({ create, close }) => (
  <div className='catalog-container'>
    <div onClick={close} style={{padding: 5, background: '#666', cursor: 'pointer'}}>Close</div>
    <div style={styles.container}>
      {Object.keys(Catalog).map(key => (
        <div style={styles.item} key={key} onClick={() => create(key)}>
          {key}
        </div>
      ))}
    </div>
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

let nextId = 0;

const makeComponent = name => ({
  tempId: `new${nextId++}`,
  name: name,
  layout: merge({
    i: `new${nextId++}`,
    moved: false,
    static: false,
    x: 0,
    y: 0, // puts it at the bottom
    w: 4,
    h: 6,
  }, Catalog[name].defaultLayout),
  props: Catalog[name].defaultProps
});

const mapDispatchToProps = (dispatch, { params }) => ({
  create: (name) => dispatch(createComponent(parsePageId(params), makeComponent(name))),
  close: () => dispatch(closeCatalog())
});
export default connect(null, mapDispatchToProps)(CatalogContainerr);
