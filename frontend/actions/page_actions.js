export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';

export const requestPages = siteId => ({
  type: REQUEST_PAGES,
  siteId
});

export const receivePages = (siteId, response) => ({
  type: RECEIVE_PAGES,
  siteId,
  response
});
