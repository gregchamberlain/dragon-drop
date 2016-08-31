import React from 'react';
import { Link } from 'react-router';
import NewSiteModal from './new_site_modal.jsx';
import Toolbar from '../ui/toolbar.jsx';
import SitesIndexItem from './sites_index_item.jsx';

const brand = <Link to="/sites">DragonDrop</Link>;
const right = [
  <Link to="/login">Login</Link>,
  <Link to="/signup">Sign Up</Link>,
];

const SitesIndex = ({ sites, currentUser, logout }) => (
  <Toolbar brand={brand} right={[<a href="javascript:void(0)" onClick={logout}>Logout</a>]}>
    <h1>Your Sites</h1>
    <div className='sites-index-container'>
      {sites.map(site => <SitesIndexItem key={site.id} site={site} />)}
    </div>
  </Toolbar>
);

export default SitesIndex;
