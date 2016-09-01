import React from 'react';
import { withRouter } from 'react-router';

const SitesIndexItem = ({ site, router }) => (
  <div className="site-wrapper">
    <div className="sites-index-item" onClick={() => router.push(`/sites/${site.id}/editor`)}>
      <h1>{site.name}</h1>
      <h3>{site.identifier}</h3>
    </div>
  </div>

);

export default withRouter(SitesIndexItem);
