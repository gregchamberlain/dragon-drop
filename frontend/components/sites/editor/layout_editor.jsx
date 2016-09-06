import React, { Component, PropTypes } from 'react';
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

class LayoutEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifStyle: {
        display: 'none',
        position: 'fixed',
      }
    }
  }

  getChildContext() {
    return {
      site: this.props.site
    }
  }

  handleKeyPress = e => {
    if (e.keyCode === 83 && e.ctrlKey === true) {
      e.preventDefault();
      this.props.savePage();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
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
          onContextMenu={this.handleRightClick}
          onToggleLock={this.toggleComponentLock.bind(this, layout)}
          openEditor={this.props.openEditor.bind(null, i, Comp.inputTypes)}
          onRemove={this.removeComponent.bind(this, el)}>
          <Comp {...el.props}/>
        </Wrapper>
      </div>
    );
  }

  removeComponent = (el, event) => {
    this.props.destroyComponent(el);
    return;
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

  handleRightClick = e => {
    e.preventDefault();
  }

  onMove = (_a, _b, _c, _d, e) => {
    const fromBottom = window.innerHeight - e.clientY;
    if (fromBottom <= 50) {
      document.getElementsByClassName('editor-content')[0].scrollTop += (50 - fromBottom) / 2;
    }
  }

  render() {

    const components = _.map(_.map(this.props.components, this.createElement));
    const layout = this.props.components.map(c => _.merge({}, c.layout));

    return (
      <div className="grid-wrapper" style={{fontSize: .0143 * contentWidth}}>
        <Grid
          style={{minHeight: Math.floor(contentHeight / 50) * 50}}
          margin={[0,0]}
          isDraggable={!this.props.locked}
          isResizable={!this.props.locked}
          className="layout-editor"
          verticalCompact={true}
          layout={layout}
          onDrag={this.onMove}
          onResize={this.onMove}
          onLayoutChange={this.layoutChange}
          draggableCancel=".draggable-cancel"
          cols={12}
          rowHeight={Math.floor(contentHeight / 50)} >
          {components}
        </Grid>
        <img style={this.state.gifStyle} src={ this.state.gifStyle.display !== 'none' ? "http://www.animatedimages.org/data/media/188/animated-dragon-image-0010.gif" : ""} alt="animated-dragon-image-0010"/>
      </div>
    );
  }
}

LayoutEditor.childContextTypes = {
  site: PropTypes.object
}

export default LayoutEditor
