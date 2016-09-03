import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import _ from 'lodash';
const Grid = WidthProvider(ReactGridLayout);
import Wrapper from './Wrapper';
import Catalog from '../../../catalog';
import LoadingPage from '../../ui/loading_page.jsx';
import PropsEditor from '../../Editor/Editor';

class GridLayout extends Component {

  createElement(el) {
    let i = `${el.id}`;
    let Comp = Catalog[el.name];
    return (
      <div key={i} data-grid={_.merge({}, el.layout)}>
        <Wrapper
          name={el.name}
          openEditor={this.props.openEditor.bind(null, el.id, Comp.inputTypes)}
          onRemove={this.props.destroyComponent.bind(this, el)}>
          <Comp {...el.props}/>
        </Wrapper>
      </div>
    );
  }

  itemLayoutChange = (_l, _o, newItem) => {
    this.props.updateLayout(_.merge({}, newItem));
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
            verticalCompact={false}
            draggableCancel=".draggable-cancel"
            onResizeStop={this.itemLayoutChange}
            onDragStop={this.itemLayoutChange}
            cols={12}
            rowHeight={30}
            width={1200}>
            {_.map(this.props.components, this.createElement.bind(this))}
          </Grid>
        </div>
        { this.props.editor ? <PropsEditor /> : ""}
      </LoadingPage>
    );
  }
}


export default GridLayout
