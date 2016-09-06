import React from 'react';
import { Link, hashHistory } from 'react-router';
import NewSiteModal from './new_site_modal.jsx';
import Toolbar from '../ui/toolbar.jsx';
import HeaderBar from '../ui/header_bar_container.jsx';
import SitesIndexItem from './sites_index_item.jsx';
import LoadingPage from '../ui/loading_page.jsx';
import NewSiteForm from './new_site_form_container.js';
import Plus from 'react-icons/lib/fa/plus';

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
          <div>
            <div className="site-wrapper">
              <div
                className="sites-index-item flex center"
                onClick={() => hashHistory.push('/sites/new')}>
                <h1 style={{color: '#888'}}><Plus /></h1>
              </div>
            </div>
            <div style={{textAlign: 'center', fontWeight: 'bold'}}>Create New Site</div>
          </div>
        ) : ""}
      </div>
      <div className="flex-space"/>
    </LoadingPage>
    </div>
  </div>
);

export default SitesIndex;
