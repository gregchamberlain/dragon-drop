import React from 'react';
import SettingsForm from './settings_form.jsx';

const SiteSettings = ({ children, site, update, destroy }) => (
  <div className="site-settings-page">
    <h1>Site Settings</h1>
    <SettingsForm site={site} update={update} destroy={destroy} />
  </div>
);

export default SiteSettings;
