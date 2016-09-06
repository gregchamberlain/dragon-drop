export const fetchPages = (siteId, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/sites/${siteId}/pages`,
    success,
    error
  });
};

export const destroyPage = page => ({
  method: 'DELETE',
  url: `api/pages/${page.id}`
});

export const createPage = (siteId, page) => ({
  method: 'POST',
  url: `api/sites/${siteId}/pages`,
  data: {page}
});

export const updatePage = page => ({
  method: 'PATCH',
  url: `api/pages/${page.id}`,
  data: {page}
});

export const fetchPage = pageId => ({
  method: 'GET',
  url: `api/pages/${pageId}`
});
