import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import SitesIndex from './sites/sites_index_container.js';
import SiteDetail from './sites/site_detail_container.js';
import Home from './home.jsx';
import RegistrationLayout from './registration/registration_layout.jsx';
import { fetchSites, fetchSite, fetchTemplates, fetchPage, parsePageId } from '../util/router_utils.js';
import SiteSettings from './sites/settings/settings_container.jsx';
import Notifications from './ui/notifications.jsx';
import EditorContent from './sites/editor/editor_content_container';
import TemplatesIndex from './templates/templates_index_container.jsx';
import SitePreview from './sites/preview_container.jsx';
import EditorToolbar from './sites/editor/editor_toolbar_container';
import NewPageForm from './sites/pages/new_page_form.jsx';
import NewSitePage from './sites/new_site_page';
import AnalyticsPage from './sites/analytics/analytics_page_container';
import { savePage } from '../actions/page_actions.js';

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

const saveOnLeave = store => ({ params }) => {
  store.dispatch(savePage(parsePageId(params)));
}

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Notifications>
      <Router history={history}>
        <Route path="/" component={Home}>
          <Route path="login" component={RegistrationLayout}/>
          <Route path="signup" component={RegistrationLayout}/>
        </Route>
        <Route path="preview/:siteId" onEnter={fetchSite(store)} >
          <IndexRoute component={SitePreview} />
          <Route path=":pageId" component={SitePreview} />
        </Route>

        <Route path="/templates" component={TemplatesIndex} onEnter={fetchTemplates(store)}/>
        <Route path="/sites" onEnter={validateUser(store)}>
          <IndexRoute component={SitesIndex} onEnter={fetchSites(store)}/>
          <Route path="new" component={NewSitePage} onEnter={fetchTemplates(store)}/>
          <Route path=":siteId" component={SiteDetail} onEnter={fetchSite(store)}>
            <IndexRedirect to='editor' />
            <Route path="editor" component={EditorToolbar}>
              <IndexRoute component={EditorContent}  />
              <Route path="new-page" component={NewPageForm} />
              <Route path=":pageId" component={EditorContent}  />
            </Route>
            <Route path="store" component={() => <div>Store</div>}/>
            <Route path="analytics" component={AnalyticsPage} />
            <Route path="settings" component={SiteSettings}/>
          </Route>
        </Route>
      </Router>
    </Notifications>
  </Provider>
);

export default Root;
