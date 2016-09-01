import React from 'react';
import { Link } from 'react-router';
import NewSiteModal from './new_site_modal.jsx';
import Toolbar from '../ui/toolbar.jsx';
import HeaderBar from '../ui/header_bar_container.jsx';
import SitesIndexItem from './sites_index_item.jsx';
import LoadingPage from '../ui/loading_page.jsx';
import NewSiteForm from './new_site_form_container.js';

const brand = <Link to="/sites">DragonDrop</Link>;
const right = [
  <Link to="/login">Login</Link>,
  <Link to="/signup">Sign Up</Link>,
];

const SitesIndex = ({ loading, sites, title, form }) => (
  <div className="fill">
    <HeaderBar />
    <div className="header-photo">
      <h1>{title}</h1>
    </div>
    <div className='sites-index'>
    <LoadingPage loading={loading}>
      <div className="sites-index-items">
        {sites.map(site => <SitesIndexItem key={site.id} site={site} />)}
        { form ? <NewSiteForm /> : ""}
      </div>
      <div className="flex-space"/>
    </LoadingPage>
    </div>
  </div>
);

export default SitesIndex;
