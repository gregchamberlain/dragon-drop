import React, { Component } from 'react';
import Catalog from '../catalog';
import { connect } from 'react-redux';
import { closeCatalog } from '../actions/editor_actions';
import { createComponent } from '../actions/component_actions';
import { parsePageId } from '../util/router_utils';
import { merge } from 'lodash';

class CatalogContainer extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === 27) {
      this.props.close();
    }
  }

  render() {
    const { create, close } = this.props;
    return(
      <div className='catalog-container'>
        <div style={styles.container}>
          {Object.keys(Catalog).map((key, idx) => (
            <div
              style={styles.item}
              key={key}
              className={idx === 0 ? 'catalog-item' : ''}
              onClick={() => {create(key); close();}}>
              {key}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
// const CatalogContainer = ({ create, close }) => (
//
// );

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
export default connect(null, mapDispatchToProps)(CatalogContainer);
