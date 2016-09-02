export const REQUEST_PAGES = 'REQUEST_PAGES';
export const CREATE_PAGE = 'CREATE_PAGE';
export const UPDATE_PAGE = 'UPDATE_PAGE';

export const requestPages = siteId => ({
  type: REQUEST_PAGES,
  siteId
});

export const createPage = (siteId, page) => ({
  type: CREATE_PAGE,
  siteId,
  page
})

export const updatePage = page => ({
  type: UPDATE_PAGE,
  page
});
