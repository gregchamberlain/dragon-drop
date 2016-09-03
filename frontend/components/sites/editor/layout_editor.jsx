import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
// import { connect } from 'react-redux';
// import { changeLayout } from '../actions/LayoutActions';
// import { removeItem } from '../actions/ItemsActions';
// import { openEditor } from '../actions/EditorActions';
import _ from 'lodash';
const Grid = WidthProvider(ReactGridLayout);
import Wrapper from './Wrapper';
import Catalog from '../../../catalog';
import LoadingPage from '../../ui/loading_page.jsx';

const nonNums = ["i", "isDraggable", "isResizable", "moved", "static"];

class GridLayout extends Component {

  createElement(el) {
    let i = `${el.id}`;
    Object.keys(el.layout).forEach(e => {
      if (nonNums.includes(e)) return;
      el.layout[e] = parseInt(el.layout[e])
    })
    let Comp = Catalog[el.name];
    return (
      <div key={i} data-grid={_.merge({}, el.layout)}>
        <Wrapper
          name={el.name}
          openEditor={this.props.openEditor.bind(null, i, Comp.inputTypes)}
          onRemove={this.props.destroyComponent.bind(this, el)}>
          <Comp {...el.props}/>
        </Wrapper>
      </div>
    );
  }

  itemLayoutChange = (_l, _o, newItem) => {
    let item = _.merge({}, newItem);
    delete item['isDraggable']
    delete item['isResizable']
    delete item['moved']
    this.props.updateLayout(item);
  }

  render() {
    return (
      <LoadingPage loading={this.props.loading}>
        <button onClick={this.props.savePage}>Save</button>
        <div className="grid-wrapper">
          <Grid
            margin={[0,0]}
            isDraggable={!this.props.locked}
            isResizable={!this.props.locked}
            className="layout"
            draggableCancel=".draggable-cancel"
            onResizeStop={this.itemLayoutChange}
            onDragStop={this.itemLayoutChange}
            cols={12}
            rowHeight={30}
            width={1200}>
            {_.map(this.props.components, this.createElement.bind(this))}
          </Grid>
        </div>
      </LoadingPage>
    );
  }
}


  // draggableHandle='.draggable-handle'

export default GridLayout
//
// const mapSateToProps = state => ({
//   items: Object.keys(state.items).map(key => state.items[key]),
// });
//
// const mapDispatchToProps = dispatch => ({
//   changeLayout: layout => dispatch(changeLayout(layout)),
//   removeItem: i => dispatch(removeItem(i)),
//   openEditor: (i, inputTypes) => dispatch(openEditor(i, inputTypes)),
// });
//
// export default connect(
//   mapSateToProps,
//   mapDispatchToProps
// )(GridLayout);
