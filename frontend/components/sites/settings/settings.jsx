import React, { Component } from 'react';
import SettingsForm from './settings_form.jsx';
import moment from 'moment'
import Tour from '../../../util/tour/tour';

const tour = new Tour();
tour.addStep({
  target: '.deploy-button',
  attachment: 'bottom center',
  className: 'top-center',
  title: 'Deploy!',
  body: 'Click here to make your site go live'
});

tour.addStep({
  target: '.site-link',
  attachment: 'bottom center',
  className: 'top-center',
  title: 'Congrats! You made your first site!',
  body: 'Click the link to view your newly deployed site, and share it with all your friends!'
});

class SiteSettings extends Component {
  componentDidMount() {
    tour.start();
  }
  componentWillUnmount() {
    tour.hide();
  }
  render() {
    const { children, site, update, destroy, deploy } = this.props;
    return (
      <div className="site-settings-page">
        <div className="site-settings-info">
          <h1>Site Settings</h1>
          { site.deployed ? (
            <div className="flex column center">
              <h3 style={{margin: 0}}>
                <a href={`http://${site.identifier}.dragon-drop.com`} target="_blank" className="site-link">
                  {`${site.identifier}.dragon-drop.com`}
                </a>
              </h3>
              <p style={{margin: '0 0 25px 0'}}>
                Last Deploy: {moment(site.deployed).fromNow()}
              </p>
            </div>
          ) : <p>Not yet Deployed</p>}
          <button onClick={() => deploy(site)} className="deploy-button">Deploy</button>
          <button className="destroy-button" onClick={() => destroy(site)}>delete site</button>
        </div>
        <SettingsForm site={site} update={update} destroy={destroy} deploy={deploy}/>
      </div>
    );
  }
}

export default SiteSettings;
