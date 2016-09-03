import React from 'react';
import configureStore from '../store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app.jsx';
import SitesIndex from './sites/sites_index_container.js';
import SiteDetail from './sites/site_detail_container.js';
import Home from './home.jsx';
import RegistrationLayout from './registration/registration_layout.jsx';
import { fetchSites, fetchSite, fetchTemplates, fetchPage } from '../util/router_utils.js';
import PageEditor from './sites/pages/page_editor.jsx';
import PagesMain from './sites/pages/pages_main_container.jsx';
import SiteSettings from './sites/settings/settings_container.jsx';
import Notifications from './ui/notifications.jsx';
import TemplatesIndex from './templates/templates_index_container.jsx';
import LayoutEditor from './sites/editor/layout_editor_container.js';
import SitePreview from './sites/preview_container.jsx';

const validateUser = (store) => {
  return (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };
};

const takeCurrentUserToSites = (store) => {
  return (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/sites');
    }
  };
};

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Notifications>
      <Router history={history}>
        <Route path="/" component={Home}>
          <Route path="login" component={RegistrationLayout}/>
          <Route path="signup" component={RegistrationLayout}/>
        </Route>
        <Route path="preview/:siteId" onEnter={fetchSite(store)} >
          <Route path=":pageId" component={SitePreview} />
        </Route>

        <Route path="/templates" component={TemplatesIndex} onEnter={fetchTemplates(store)}/>
        <Route path="/sites" onEnter={validateUser(store)}>
          <IndexRoute component={SitesIndex} onEnter={fetchSites(store)}/>
          <Route path=":siteId" component={SiteDetail} onEnter={fetchSite(store)}>
            <IndexRedirect to='editor' />
            <Route path="editor" component={PagesMain}>
              <IndexRoute component={PageEditor} />
              <Route
                path=":pageId"
                onEnter={() => {}}
                component={LayoutEditor}/>
            </Route>
            <Route path="store" component={() => <div>Store</div>}/>
            <Route path="analytics" component={() => <div>Analytics</div>}/>
            <Route path="settings" component={SiteSettings}/>
          </Route>
        </Route>
      </Router>
    </Notifications>
  </Provider>
);

export default Root;
