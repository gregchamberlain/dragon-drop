import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import _ from 'lodash';
const Grid = WidthProvider(ReactGridLayout);
import Wrapper from './Wrapper';
import Catalog from '../../../catalog';
import LoadingPage from '../../ui/loading_page.jsx';
import PropsEditor from '../../Editor/Editor';
import { Link } from 'react-router';

class GridLayout extends Component {

  createElement = (el) => {
    let i = `${el.id}`;
    let Comp = Catalog[el.name];
    return (
      <div key={i} data-grid={_.merge({}, el.layout)}>
        <Wrapper
          name={el.name}
          locked={el.layout.static}
          onToggleLock={this.toggleComponentLock.bind(this, el.layout)}
          openEditor={this.props.openEditor.bind(null, el.id, Comp.inputTypes)}
          onRemove={this.props.destroyComponent.bind(this, el)}>
          <Comp {...el.props}/>
        </Wrapper>
      </div>
    );
  }

  toggleComponentLock = layout => {
    let newLayout = _.merge({}, layout);
    newLayout.static = !newLayout.static
    console.log(newLayout);
    this.props.updateLayout(newLayout);
    this.forceUpdate();
  }

  itemLayoutChange = (_l, _o, newItem) => {
    this.props.updateLayout(_.merge({}, newItem));
  }

  render() {

    let components = _.map(_.map(this.props.components, this.createElement));
    let layout = this.props.components.map(c => _.merge({}, c.layout));

    return (
      <LoadingPage loading={this.props.loading}>
        <button onClick={this.props.savePage}>Save</button>
        <Link to={`/preview/${this.props.params.siteId}/${this.props.params.pageId}`}>Preview</Link>
        <div className="grid-wrapper">
          <Grid
            margin={[0,0]}
            isDraggable={!this.props.locked}
            isResizable={!this.props.locked}
            className="layout-editor"
            verticalCompact={false}
            layout={layout}
            draggableCancel=".draggable-cancel"
            onResizeStop={this.itemLayoutChange}
            onDragStop={this.itemLayoutChange}
            cols={12}
            rowHeight={30}
            width={1200}>
            {components}
          </Grid>
        </div>
        { this.props.editor ? <PropsEditor /> : ""}
      </LoadingPage>
    );
  }
}


export default GridLayout
