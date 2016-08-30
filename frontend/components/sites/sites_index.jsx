import React from 'react';
import { Link } from 'react-router';
import NewSiteModal from './new_site_modal.jsx';
import Toolbar from '../ui/toolbar.jsx';

const brand = <Link to="/sites">DragonDrop</Link>;
const right = [
  <Link to="/login">Login</Link>,
  <Link to="/signup">Sign Up</Link>,
];

const SitesIndex = ({ sites, currentUser, logout }) => (
  <Toolbar brand={brand} right={[<a href="javascript:void(0)" onClick={logout}>Logout</a>]}>
    <h1>Your Sites</h1>
    <ul>
      {sites.map(site => (
        <li key={site.id}>
          <Link to={`/sites/${site.id}`}>
            {site.name} - {site.identifier}
          </Link>
        </li>
      ))}
    </ul>
  </Toolbar>
);

export default SitesIndex;
