export const REQUEST_PAGES = 'REQUEST_PAGES';
export const REQUEST_PAGE = 'REQUEST_PAGE';
export const CREATE_PAGE = 'CREATE_PAGE';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const ADD_COMPONENT = 'ADD_COMPONENT';
export const REMOVE_COMPONENT = 'REMOVE_COMPONENT';

export const requestPages = siteId => ({
  type: REQUEST_PAGES,
  siteId
});

export const requestPage = pageId => ({
  type: REQUEST_PAGE,
  pageId
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

export const addComponent = (pageId, componentId) => ({
  type: ADD_COMPONENT,
  pageId,
  componentId
});

export const removeComponent = (pageId, componentId) => ({
  type: REMOVE_COMPONENT,
  pageId,
  componentId
})
