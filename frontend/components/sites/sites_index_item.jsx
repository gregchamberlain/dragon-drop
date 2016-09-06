import React from 'react';
import { withRouter } from 'react-router';
import { isEqual } from 'lodash';

const getUrl = (site, template, selected) => (
  template ? `/sites/${site.identifier}/editor` : {pathname: `/preview/${site.identifier}`, query: {back: selected ? '/sites/new' : '/templates'}}
)

const SitesIndexItem = ({ site, router, template, selected, onClick }) => (
  <div className={`site-wrapper${ isEqual(selected, site) ? " selected" : ""}`}>
    <div className="sites-index-item" onClick={selected ? () => onClick(site) : () => router.push(getUrl(site, template, selected))}>
      <h1>{site.name}</h1>
      <h3>{site.identifier}</h3>
      { selected ? <button onClick={e => {e.stopPropagation(); router.push(getUrl(site, template, selected))}} className="preview-button">Preview</button> : ""}
    </div>
  </div>

);

export default withRouter(SitesIndexItem);
