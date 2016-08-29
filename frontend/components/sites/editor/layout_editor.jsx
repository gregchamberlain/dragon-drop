import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { changeLayout } from '../actions/LayoutActions';
import { removeItem } from '../actions/ItemsActions';
import { openEditor } from '../actions/EditorActions';
import _ from 'lodash';
const Grid = WidthProvider(ReactGridLayout);
import Wrapper from './Wrapper';
import Catalog from '../catalog';

class GridLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 2, add: i === (list.length - 1).toString()};
      }),
      counter: 0,
    };
  }

  createElement(el) {
    let i = el.i;
    let Comp = Catalog[el.component];
    return (
      <div key={i} data-grid={el}>
        <Wrapper
          name={el.component}
          openEditor={this.props.openEditor.bind(null, i, Comp.inputTypes)}
          onRemove={this.props.removeItem.bind(this, i)}>
          <Comp {...el.props}/>
        </Wrapper>
      </div>
    );
  }

  layoutChange(layout) {
    this.props.changeLayout(layout);
  }

  render() {

    return (
      <Grid
        draggableHandle='.draggable-handle'
        margin={[0,0]}
        isDraggable={!this.props.locked}
        isResizable={!this.props.locked}
        onLayoutChange={this.layoutChange.bind(this)}
        className="layout"
        cols={12}
        rowHeight={30}
        width={1200}>
        {_.map(this.props.items, this.createElement.bind(this))}
      </Grid>
    );
  }
}

const mapSateToProps = state => ({
  items: Object.keys(state.items).map(key => state.items[key]),
});

const mapDispatchToProps = dispatch => ({
  changeLayout: layout => dispatch(changeLayout(layout)),
  removeItem: i => dispatch(removeItem(i)),
  openEditor: (i, inputTypes) => dispatch(openEditor(i, inputTypes)),
});

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(GridLayout);
