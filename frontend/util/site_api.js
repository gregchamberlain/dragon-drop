export const fetchSites = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/sites',
    success,
    error
  });
};

export const fetchSite = (siteId, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/sites/${siteId}`,
    success,
    error
  });
};
