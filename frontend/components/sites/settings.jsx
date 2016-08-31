import React from 'react';
import SettingsForm from './settings_form.jsx';

const SiteSettings = ({ children }) => (
  <div className="site-settings-page">
    <h1>Site Settings</h1>
    <SettingsForm site={{name: "test site", identifier: "test-site"}}/>
  </div>
);

export default SiteSettings;
