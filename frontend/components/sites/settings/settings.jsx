import React from 'react';
import SettingsForm from './settings_form.jsx';

const SiteSettings = ({ children, site, update, destroy, deploy }) => (
  <div className="site-settings-page">
    <h1>Site Settings</h1>
    <SettingsForm site={site} update={update} destroy={destroy} deploy={deploy}/>
  </div>
);

export default SiteSettings;
