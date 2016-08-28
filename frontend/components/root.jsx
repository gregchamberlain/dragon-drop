import React from 'react';
import configureStore from '../store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app.jsx';
import SitesIndex from './sites/sites_index_container.js';
import { requestSites, requestSite } from '../actions/site_actions.js';
import SiteDetail from './sites/site_detail_container.js';
import Sidebar from './ui/sidebar.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="sites" onEnter={() => store.dispatch(requestSites())}>
          <IndexRoute component={SitesIndex} />
          <Route path=":siteId" component={Sidebar} onEnter={state => store.dispatch(requestSite(state.params.siteId))}>
            <IndexRedirect to='editor' />
            <Route path="editor" component={SiteDetail}/>
            <Route path="store" component={() => <div>Store</div>}/>
            <Route path="analytics" component={() => <div>Analytics</div>}/>
            <Route path="settings" component={() => <div>Settings</div>}/>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
