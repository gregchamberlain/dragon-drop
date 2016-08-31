export const fetchSites = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/sites',
    success,
    error
  });
};

export const destroySite = (site, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/sites/${site.id}`,
    success,
    error
  });
};

export const fetchSite = (siteId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/sites/${siteId}`,
    success,
    error
  });
};

export const updateSite = (site, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/sites/${site.id}`,
    data: {site},
    success,
    error
  });
};

export const createSite = (site, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/sites',
    data: {site},
    success,
    error
  });
};
