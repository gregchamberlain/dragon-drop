export const REQUEST_SITES = 'REQUEST_SITES';
export const RECEIVE_SITES = 'RECEIVE_SITES';
export const REQUEST_SITE = 'REQUEST_SITE';
export const RECEIVE_SITE = 'RECEIVE_SITE';
export const CREATE_SITE = 'CREATE_SITE';

export const createSite = site => ({
  type: CREATE_SITE,
  site
});

export const requestSites = () => ({
  type: REQUEST_SITES
});

export const receiveSites = response => ({
  type: RECEIVE_SITES,
  response
});

export const requestSite = siteId => ({
  type: REQUEST_SITE,
  siteId
});

export const receiveSite = response => ({
  type: RECEIVE_SITE,
  response
});
