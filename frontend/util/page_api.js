export const fetchPages = (siteId, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/sites/${siteId}/pages`,
    success,
    error
  });
};

export const createPage = (siteId, page, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/sites/${siteId}/pages`,
    data: {page},
    success,
    error
  });
};
