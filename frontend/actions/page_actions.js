export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const CREATE_PAGE = 'CREATE_PAGE';

export const requestPages = siteId => ({
  type: REQUEST_PAGES,
  siteId
});

export const receivePages = (siteId, response) => ({
  type: RECEIVE_PAGES,
  siteId,
  response
});

export const createPage = (siteId, page) => ({
  type: CREATE_PAGE,
  siteId,
  page
})
