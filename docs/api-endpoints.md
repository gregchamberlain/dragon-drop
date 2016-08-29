# API Endpoints

## HTML API

#### Root

- `GET /` - React App

## JSON API

#### Users

- `POST /api/users`
- `PATCH /api/users`

#### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

#### Sites

- `GET /api/sites`
- `POST /api/sites`
- `PATCH /api/sites/:id`
- `DELETE /api/sites/:id`
- `POST /api/sites/:site_id/deploy`
  - Sends request to node backend to compile and deploy the site
- `GET /api/sites/:id`
  - Includes the sites pages
- `POST /api/sites/:site_id/pages`
- `GET /api/sites/templates`
  - Retrieves sites marked as templates


#### Pages

- `GET /api/pages`
  - Includes the pages components
- `PATCH /api/pages/:id`
  - Accepts nested attributes for components
- `DELETE /api/pages/:id`
- `POST /api/pages/:page_id/components`
- `GET /api/pages/templates`
  - Retrieves pages marked as templates

#### Components

- `DELETE /api/components/:id`

## Node API

- `POST /deploy`
  - Requested with site data (site / pages / components) compiles the data with react/webpack and deploys an index.html and bundle.js to AWS S3 for static hosting
