import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import _ from 'lodash';
const Grid = WidthProvider(ReactGridLayout);
import Wrapper from './Wrapper';
import Catalog from '../../../catalog';
import LoadingPage from '../../ui/loading_page.jsx';
import PropsEditor from '../../Editor/Editor';
import { Link } from 'react-router';
import { parsePageId } from '../../../util/router_utils';
import CatalogView from '../../Catalog';

const viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const viewWidth = Math.max(document.documentElement.width || 0, window.innerWidth || 0);
const ratio = viewWidth / viewHeight;
const contentWidth = viewWidth - 56 - 100;
const contentHeight = contentWidth / ratio;

class GridLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifStyle: {
        display: 'none',
        position: 'fixed',
      }
    }
  }

  createElement = (el) => {
    let i = `${el.id || el.tempId}`;
    let layout = _.merge({}, el.layout);
    layout.i = i;
    let Comp = Catalog[el.name];
    return (
      <div key={i} data-grid={layout}>
        <Wrapper
          name={el.name}
          locked={el.layout.static}
          onToggleLock={this.toggleComponentLock.bind(this, layout)}
          openEditor={this.props.openEditor.bind(null, i, Comp.inputTypes)}
          onRemove={this.removeComponent.bind(this, el)}>
          <Comp {...el.props}/>
        </Wrapper>
      </div>
    );
  }

  removeComponent = (el, event) => {
    let gifStyle = {};
    let width = gifStyle.width = (el.layout.w) * contentWidth / 12;
    let height = el.layout.h * contentHeight / 25;
    gifStyle.right = (viewWidth - event.clientX) + (width / 2) - 50;
    gifStyle.top = event.clientY + height / 4;
    gifStyle.width = contentWidth;
    gifStyle.display = 'block';
    gifStyle.position = 'fixed';
    gifStyle.transform = 'translateX(50%) translateY(-50%)'
    this.setState({gifStyle})
    setTimeout(this.destroyComponent(el), 675)
    setTimeout(this.removeImage, 1000)
  }

  destroyComponent = el => () => {
    this.props.destroyComponent(el);
  }

  removeImage = () => {
    this.setState({gifStyle: {display: 'none'}});
  }

  toggleComponentLock = layout => {
    let newLayout = _.merge({}, layout);
    newLayout.static = !newLayout.static
    this.props.updateLayout([newLayout]);
  }

  layoutChange = layout => {
    this.props.updateLayout(layout);
  }

  render() {

    const components = _.map(_.map(this.props.components, this.createElement));
    const layout = this.props.components.map(c => _.merge({}, c.layout));

    return (
      <LoadingPage loading={this.props.loading}>
        <div className="grid-wrapper" style={{fontSize: .0143 * contentWidth}}>
          <Grid
            style={{minHeight: contentHeight}}
            margin={[0,0]}
            isDraggable={!this.props.locked}
            isResizable={!this.props.locked}
            className="layout-editor"
            verticalCompact={true}
            layout={layout}
            onLayoutChange={this.layoutChange}
            draggableCancel=".draggable-cancel"
            cols={12}
            rowHeight={Math.floor(contentHeight / 50)} >
            {components}
          </Grid>
        </div>
        { this.props.editor ? <PropsEditor /> : ""}
        <div className='catalog-container'>
          <CatalogView params={this.props.params} />
        </div>
        <img style={this.state.gifStyle} src={ this.state.gifStyle.display !== 'none' ? "http://www.animatedimages.org/data/media/188/animated-dragon-image-0010.gif" : ""} alt="animated-dragon-image-0010"/>
      </LoadingPage>
    );
  }
}


export default GridLayout
