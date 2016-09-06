import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { isEqual } from 'lodash';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
const Grid = WidthProvider(ReactGridLayout);
import _ from 'lodash';
import Catalog from '../../catalog';

const createElement = el => {
  let i = `${el.id}`;
  let Comp = Catalog[el.name];
  const layout = JSON.parse(el.layout);
  const props = JSON.parse(el.props);
  return (
    <div key={i} data-grid={_.merge({}, layout)}>
      <Comp {...props}/>
    </div>
  );
}

const layout = components => components.map(c => _.merge({}, JSON.parse(c.layout)));

const getUrl = (site, template, selected) => (
  template ? `/sites/${site.identifier}/editor` : {pathname: `/preview/${site.identifier}`, query: {back: selected ? '/sites/new' : '/templates'}}
)

class SitesIndexItem extends Component {

  componentDidMount() {
    const box = this.refs.box.getBoundingClientRect();
    const width = box.right - box.left;
    const height = box.bottom - box.top;
    const viewWidth = 1366;
    const viewHeight = 768;
    const widthRatio = width / viewWidth;
    const heightRatio = height / viewHeight;
  }

  handleClick = e => {
    const { selected, site, router, template, onClick } = this.props;
    selected ?  onClick(site) : router.push(getUrl(site, template, selected));
  }


  render() {

    const { site, router, template, selected, onClick } = this.props;
    return (
      <div className={`site-item${ isEqual(selected, site) ? " selected" : ""}`}>
        <div className="site-wrapper">
          <div ref="box" className="sites-index-item" onClick={this.handleClick}>
            { site.id !== 0 ? (
              <Grid
                style={{position: 'absolute', top: 0, left: 0, width: 1366, height: 768, transform: 'scale(0.1756)', transformOrigin: '0 0'}}
                margin={[0,0]}
                isDraggable={false}
                layout={layout(site.root_page.components)}
                isResizable={false}
                className="site-preview"
                verticalCompact={false}
                cols={12}
                rowHeight={768 / 50}>
                {_.map(site.root_page.components, createElement)}
              </Grid>
            ) : "" }
            { selected ? <button onClick={e => {e.stopPropagation(); router.push(getUrl(site, template, selected))}} className="preview-button">Preview</button> : ""}
          </div>
        </div>
        <div style={{textAlign: 'center', fontWeight: 'bold'}}>{site.name}</div>
      </div>
    );
  }
}
export default withRouter(SitesIndexItem);
