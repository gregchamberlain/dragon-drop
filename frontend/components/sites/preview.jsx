import React from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import LoadingPage from '../ui/loading_page.jsx';
import _ from 'lodash';
import Catalog from '../../catalog';
const Grid = WidthProvider(ReactGridLayout);

const createElement = el => {
  let i = `${el.id}`;
  let Comp = Catalog[el.name];
  return (
    <div key={i} data-grid={_.merge({}, el.layout)}>
      <Comp {...el.props}/>
    </div>
  );
}

const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const SitePreview = ({ loading, components }) => (
  <LoadingPage loading={loading}>
    <div style={{width: '100%', height: '100%', background: '#fff', fontSize: '1.43vw'}}>
      <Grid
        margin={[0,0]}
        isDraggable={false}
        isResizable={false}
        className="site-preview"
        verticalCompact={false}
        cols={12}
        rowHeight={height / 25}
        width={1200}>
        {_.map(components, createElement)}
      </Grid>
    </div>
  </LoadingPage>
);

export default SitePreview;
