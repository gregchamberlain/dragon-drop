import React from 'react';
import { withRouter } from 'react-router';

const getUrl = (site, template) => (
  template ? `/sites/${site.identifier}/editor` : `/preview/${site.identifier}`
)

const SitesIndexItem = ({ site, router, template }) => (
  <div className="site-wrapper">
    <div className="sites-index-item" onClick={() => router.push(getUrl(site, template))}>
      <h1>{site.name}</h1>
      <h3>{site.identifier}</h3>
    </div>
  </div>

);

export default withRouter(SitesIndexItem);
