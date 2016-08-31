export const REQUEST_SITES = 'REQUEST_SITES';
export const RECEIVE_SITES = 'RECEIVE_SITES';
export const REQUEST_SITE = 'REQUEST_SITE';
export const RECEIVE_SITE = 'RECEIVE_SITE';
export const CREATE_SITE = 'CREATE_SITE';
export const UPDATE_SITE = 'UPDATE_SITE';
export const DESTROY_SITE = 'DESTROY_SITE';

export const createSite = site => ({
  type: CREATE_SITE,
  site
});

export const requestSites = () => ({
  type: REQUEST_SITES
});

export const requestSite = siteId => ({
  type: REQUEST_SITE,
  siteId
});

export const updateSite = site => ({
  type: UPDATE_SITE,
  site
});

export const destroySite = site => ({
  type: DESTROY_SITE,
  site
});
