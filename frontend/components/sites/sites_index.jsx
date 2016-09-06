import React from 'react';
import { Link, hashHistory } from 'react-router';
import NewSiteModal from './new_site_modal.jsx';
import Toolbar from '../ui/toolbar.jsx';
import HeaderBar from '../ui/header_bar_container.jsx';
import SitesIndexItem from './sites_index_item.jsx';
import LoadingPage from '../ui/loading_page.jsx';
import NewSiteForm from './new_site_form_container.js';

const SitesIndex = ({ loading, sites, title, form }) => (
  <div className="fill">
    <HeaderBar />
    <div className="header-photo">
      <h1>{title}</h1>
    </div>
    <div className='sites-index'>
    <LoadingPage loading={loading}>
      <div className="sites-index-items">
        {sites.map(site => (
          <SitesIndexItem key={site.id} site={site} template={form} />
        ))}
        { form ? (
          <div className="site-wrapper">
            <div
              className="sites-index-item flex center"
              onClick={() => hashHistory.push('/sites/new')}>
              <h3>New Site</h3>
            </div>
          </div>
        ) : ""}
      </div>
      <div className="flex-space"/>
    </LoadingPage>
    </div>
  </div>
);

export default SitesIndex;
