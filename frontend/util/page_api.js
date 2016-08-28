export const fetchPages = (siteId, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/sites/${siteId}/pages`,
    success,
    error
  });
};
