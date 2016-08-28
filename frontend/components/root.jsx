import React from 'react';
import configureStore from '../store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import App from './app.jsx';
import SitesIndex from './sites/sites_index_container.js';
import { requestSites, requestSite } from '../actions/site_actions.js';
import SiteDetail from './sites/site_detail_container.js';
import Sidebar from './ui/sidebar.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="sites/:siteId" component={Sidebar} onEnter={state => store.dispatch(requestSite(state.params.siteId))}>
          <IndexRedirect to='editor' />
          <Route path="editor" component={SiteDetail}/>
        </Route>
        <Route path="sites" component={SitesIndex} onEnter={() => store.dispatch(requestSites())}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
