# [DragonDrop](https://greg-dragon-drop.herokuapp.com)

## Minimum Viable Product
DragonDrop is a web application inpired by Squarespace build using React and Redux. By the end of week 9, this app will, at minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling.
- [ ] New account creation, login, and guest/demo login,
- [ ] A production README
- [ ] Hosting on Heroku
- [ ] Sites with pages for navigation
- [ ] Drag and Drop site building
- [ ] Page and Site templates
- [ ] Publish site (allow others to see the preview page i.e www.dragon-drop.com/sites/1)


## Design Docs
- [Wireframes](https://github.com/gregchamberlain/round-room/tree/master/docs/wireframes)
- [React Components](https://github.com/gregchamberlain/round-room/blob/master/docs/component-heirarchy.md)
- [API Endpoints](https://github.com/gregchamberlain/round-room/blob/master/docs/api-endpoints.md)
- [DB Schema](https://github.com/gregchamberlain/round-room/blob/master/docs/schema.md)
- [Redux Structure](https://github.com/gregchamberlain/round-room/blob/master/docs/redux-structure.md)
- [Sample State](https://github.com/gregchamberlain/round-room/blob/master/docs/sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)
**Objective:** Functioning rails project with front-end auth
- [x] New Rails Project
- [ ] Webpack setup and frontend skeleton w/ router setup
- [ ] User model/migration
- [ ] Backend Auth
- [ ] StaticPages Controller and root view
- [ ] Nested API routes with default json format
- [ ] Redux Cycles for frontend auth
- [ ] Signup/Signin Form Components w/ styling
- [ ] Blank sites index after login
- [ ] Seed users

### Phase 2: Sites Model, API, and components (1 day)
**Objective:** Sites can be created, read, updated, destroyed through API and app
- [ ] `Site` model
- [ ] Seed Sites
- [ ] CRUD API from `SitesController`, plus template endpoints
- [ ] Sites components w/ styles and routes
  - `SitesIndex`
  - `SitesIndexItem`
  - `SiteDetail`
  - `SitesForm`
  - `SitesSettings`
  - `TemplateIndexx`
- [ ] Redux cycle for sites
- [ ] Styling all components and overall `SiteDetail` page layout

### Phase 3: Pages Model, API, and basic components (1 day)
**Objective:** Pages can be created, read, updated, destroyed through API and app
- [ ] `Page` model
- [ ] Seed Pages
- [ ] CRUD API from `PagesController`, plus template endpoints
- [ ] Sites start w/ default home page
- [ ] Basic Page components w/ styles and routes
  - `PageNavigation`
  - `PageSettings`
  - `TemplateIndex`
- [ ] Redux cycle for pages

### Phase 4: Components Model, API and components (1 day)
- [ ] `Component` model
- [ ] CRUD API from `ComponentsController`
- [ ] Redux cycle for adding and removing a `Component` from a page
- [ ] Pages accept nested attributes for `Components` when updating
- [ ] Create a few test components for the catalog.
  - `Image`
  - `Header`
  - `Paragraph`
- [ ] Add styling to catalog components

### Phase 5: Drag and Drop Editing (2 days)
- [ ] Drag and Drop editing of pages
- [ ] Add/remove `Components` from page
- [ ] Redux cycle for updating `Component` layout attribute
- [ ] Redux action to save the modified page
- [ ] Redux acions to populate the editor w/ saved pages
- [ ] Wrapper component for moving/resizing/selecting `Component`
- [ ] Style `Wrapper` and `LayoutEditor` components

### Phase 6: Component Prop Editing (1 days)
- [ ] Util for specifying catalog component prop inputTypes
- [ ] component to edit available props for `Component`
- [ ] Redux cycle for updating `Component` props attribute
- [ ] Add styling for `PropEditor` component

### Phase 7: Site Preview and Catalog Components (1 day)
- [ ] Components/Routes to preview Created site
- [ ] create more components for the catalog
- [ ] Add styling to additional catalog components


### Bonus Phases
#### Site packaging and deployment
- [ ] Setup node server with webpack and skeleton react Project
- [ ] Setup react skeleton to consume data from pages/components
- [ ] Webpack to compile react app string into bundled data
- [ ] export bundled data as bundle.js and skeleton index.html to AWS S3 static hosting

#### Analytics
- [ ] Add ability to track site/page visits
- [ ] create a dashboard to show data

#### Store
- [ ] Allow each site to have products
- [ ] Create dashboard to create/edit product
- [ ] create catalog component to fetch and display sites products

#### Site Manager
- [ ] Allow multiple allowed users to edit a site
- [ ] Manages sites section in SitesIndex page
- [ ] add/revoke users from managers list
