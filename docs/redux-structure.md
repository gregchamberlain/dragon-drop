# Redux Structure

  I am using [Normalizr](https://github.com/paularmstrong/normalizr) to define the Schema of my redux store state. This normalizes API responses to objects keyed by id. Normailzing one entity returns the same structure as an array of entities, so the same receive action can be used in both cases.

## Auth Cycles

#### Session API Request Actions

- `signUp`
  0. called from SignUpForm `onSubmit`
  0. `POST /api/users` is called
  0. `receiveCurrentUser` is dispatched on the callback
- `logIn`
  0. called from LoginForm `onSubmit`
  0. `POST /api/session` is called
  0. `receiveCurrentUser` is dispatched on the callback
- `logOut`
  0. called from Toolbar `onClick`
  0. `DELETE /api/session` is called
  0. `removeCurrentUser` is dispatched on the callback

#### Session API Response Actions

- `receiveCurrentUser`
  0. invoked on API callback
  0. `SessionReducer` stores `currentUser` in state

- `removeCurrentUser`
  0. invoked on API callback
  0. `SessionReducer` removed the `currentUser` from state

## Site Cycles

#### Sites API Request Actions

 - `fetchSites`
  0. invoked on `/sites` `onEnter`
  0. `GET /api/sites` is called
  0. `receiveSites` is dispatched on callback with normalized data

- `fetchSite`
  0. invoked on `/sites/:site_id` `onEnter`
  0. `GET /api/sites/site_id` is called
  0. `receiveSites` is dispatched on callback with normalized data

- `createSite`
  0. invoked on `CreateSiteModal` `onSubmit`
  0. `POST /api/sites` is called (creates default home page)
  0. `receiveSites` is dispatched on callback with normalized data

- `updateSite`
  0. invoked on `SiteSettings` `onSubmit`
  0. `PATCH /api/sites/:site_id` is called (includes pages)
  0. `receiveSites` is dispatched on callback with normalized data

- `destroySite`
  0. invlide on `SiteSettings` `onClick`
  0. `DELETE /api/sites/:site_id` is called
  0. `removeSite` is dispatched

#### Sites API Response Actions

- `receiveSites`
  0. invoked on API callback with normalized data
  0. `SitesReducer` stores site(s) in state

- `removeSite`
  0. invoked on API callback
  0. `SitesReducer` removes site from state

## Page Cycles

#### Pages API Request Cycle

- `fetchPage`
  0. invoked on `/sites/:site_id/editor/:page_id` `onEnter`
  0. `GET /api/pages/:page_id` is called (includes components)
  0. `receivePages` is dispatched with normalized data

- `createPage`
  0. invoked on `PageNavigation` `onClick`
  0. `POST /api/sites/:site_id/pages` is called
  0. `receivePages` is dispatched with normalized data

- `updatePage`
  0. invoked on `PageSettings` `onSubmit`
  0. `PATCH /api/pages/:id` is called with nested components
  0. `receivePages` is dispatched with normalized data

- `destroyPage`
  0. invoked on `PageSettings` `onClick`
  0. `DELETE /api/pages/:id` is called
  0. `removePage` is dispatched with normalized data

#### Pages API Response Cycle

- `receiveSites`
  0. invoked on API callback (fetchSite)
  0. `PagesReducer` stores page(s) in state

- `receivePages`
  0. invoked on API callback
  0. `PagesReducer` stores pages in state

- `removePage`
  0. invoked on API callback
  0. `PagesReducer` removes the page from the state

## Component Cycles

#### Component API Request Cycle

- `addComponent`
  0. invoked in `ComponentCatalog` `onClick`
  0. `POST /api/pages/:page_id/components` is called
  0. `recieveComponent` is dispatched with normalized data

- `destroyComponent`
  0. invoked in `Wrapper` `onClick`
  0. `DELETE /components/:id` is called
  0. `removeComponent` is dispatched

#### Component API Response Cycle

- `receivePages`
  0. invoked on API callback
  0. `ComponentReducer` stores component(s) in state

- `recieveComponent`
  0. invoked on API callback
  0. `ComponentReducer` stores component in state

- `removeComponent`
  0. invoked on API callback
  0. `ComponentReducer` removes the component from state

#### Component Update Cycles

  - `updateComponentProps`
    0. invoked from `PropEditor` `onChange`
    0. `ComponentReducer` updates component in store

  - `updateComponentLayout`
    0. invoked from `LayoutEditor` `onChange`
    0. `ComponentReducer` updates component in store
