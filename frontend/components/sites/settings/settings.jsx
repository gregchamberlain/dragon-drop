import React from 'react';
import SettingsForm from './settings_form.jsx';
import moment from 'moment'

const SiteSettings = ({ children, site, update, destroy, deploy }) => (
  <div className="site-settings-page">
    <div className="site-settings-info">
      <h1>Site Settings</h1>
      { site.deployed ? (
        <div className="flex column center">
          <h3 style={{margin: 0}}>
            <a href={`http://${site.identifier}.dragon-drop.com`} target="_blank">
              {`${site.identifier}.dragon-drop.com`}
            </a>
          </h3>
          <p style={{margin: '0 0 25px 0'}}>
            Last Deploy: {moment(site.deployed).fromNow()}
          </p>
        </div>
      ) : <p>Not yet Deployed</p>}
      <button onClick={() => deploy(site)}>Deploy</button>
      <button className="destroy-button" onClick={() => destroy(site)}>delete site</button>
    </div>
    <SettingsForm site={site} update={update} destroy={destroy} deploy={deploy}/>
  </div>
);

export default SiteSettings;
