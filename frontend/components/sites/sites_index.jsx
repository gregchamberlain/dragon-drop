import React from 'react';
import { Link } from 'react-router';
import NewSiteModal from './new_site_modal.jsx';
import Toolbar from '../ui/toolbar.jsx';
import SitesIndexItem from './sites_index_item.jsx';
import LoadingPage from '../ui/loading_page.jsx';
import NewSiteForm from './new_site_form_container.js';

const brand = <Link to="/sites">DragonDrop</Link>;
const right = [
  <Link to="/login">Login</Link>,
  <Link to="/signup">Sign Up</Link>,
];

const SitesIndex = ({ sites, currentUser, logout, loading, createNotification }) => (
  <Toolbar brand={brand} right={[<a href="javascript:void(0)" onClick={logout}>Logout</a>]}>
    <LoadingPage loading={loading}>
      <div className='sites-index'>
        <div className="sites-index-items">
          {sites.map(site => <SitesIndexItem key={site.id} site={site} />)}
          <NewSiteForm />
        </div>
      </div>
    </LoadingPage>
  </Toolbar>
);

export default SitesIndex;
