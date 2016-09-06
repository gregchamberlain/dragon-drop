import React, { Component, PropTypes } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import LoadingPage from '../ui/loading_page.jsx';
import _ from 'lodash';
import Catalog from '../../catalog';
const Grid = WidthProvider(ReactGridLayout);
import ArrowDown from 'react-icons/lib/fa/arrow-down';
import Back from 'react-icons/lib/fa/arrow-left';

const createElement = siteId => el => {
  let i = `${el.id}`;
  let Comp = Catalog[el.name];
  return (
    <div key={i} data-grid={_.merge({}, el.layout)}>
      <Comp {...el.props}/>
    </div>
  );
}

const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

class SitePreview extends Component {

  getChildContext = () => {
    return {
      preview: this.props.siteId,
      site: this.props.site
    }
  }

  render () {
    const { loading, components, siteId, site, goBack, back } = this.props
    const layout = components.map(c => _.merge({}, c.layout));

    return (
      <LoadingPage loading={loading}>
        { back ? (
          <div className="preview-overlay">
            <div className="item action" onClick={goBack}>
              <Back />
            </div>
          <div className="item">Preview</div>
          </div>
        ) : ""}
        <div style={{width: '100%', flex: 1, background: '#fff', fontSize: '1.43vw'}}>
          <Grid
            margin={[0,0]}
            isDraggable={false}
            layout={layout}
            isResizable={false}
            className="site-preview"
            verticalCompact={false}
            cols={12}
            rowHeight={height / 50}>
            {_.map(components, createElement(siteId))}
          </Grid>
        </div>
      </LoadingPage>
    );
  }
}

SitePreview.childContextTypes = {
  preview: PropTypes.string,
  site: PropTypes.object,
}

export default SitePreview;
