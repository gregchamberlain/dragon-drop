import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { changeLayout } from '../actions/layout_actions.js';
import { removeItem } from '../actions/item_actions.js';
import { openEditor } from '../actions/editor_actions.js';
import _ from 'lodash';
const Grid = WidthProvider(ReactGridLayout);
import Wrapper from './Wrapper';
import Catalog from '../catalog';

class GridLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layout: JSON.parse(JSON.stringify(props.items))
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.items.length === 0 || this.props.items.length === 0) return;
    if (nextProps.items.length !== this.props.items.length) return;
    if (this.props.items[0].i !== nextProps.items[0].i) {
      this.setState({layout: JSON.parse(JSON.stringify(nextProps.items))});
    }
  }

  layoutChange(layout) {
    this.props.changeLayout(layout);
  }

  render() {

    return (
      <Grid
        layout={this.state.layout}
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
