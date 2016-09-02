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

class GridLayout extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 2, add: i === (list.length - 1).toString()};
      }),
      counter: 0,
    };
  }

  createElement(el) {
    let i = el.layout.i;
    Object.keys(el.layout).forEach(e => {
      if (e === "i") return;
      el.layout[e] = parseInt(el.layout[e])
    })
    let Comp = Catalog[el.name];
    return (
      <div key={i} data-grid={el.layout}>
        <Wrapper
          name={el.name}
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
      <LoadingPage loading={this.props.loading}>
        <div className="grid-wrapper">
          <Grid
            margin={[0,0]}
            isDraggable={!this.props.locked}
            isResizable={!this.props.locked}
            onLayoutChange={this.layoutChange.bind(this)}
            className="layout"
            draggableCancel=".draggable-cancel"
            onDragStart={() => console.log("dragStart!")}
            onDragStop={(layout, old, newitem) => console.log(layout, old, newitem)}
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
