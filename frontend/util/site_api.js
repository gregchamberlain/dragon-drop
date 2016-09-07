export const fetchSites = () => ({
  method: 'GET',
  url: 'api/sites',
});

export const deploySite = site => ({
  method: 'POST',
  url: `api/sites/${site.identifier}/deploy`
});

export const fetchSite = (siteId) => ({
  method: 'GET',
  url: `api/sites/${siteId}`,
});

export const destroySite = site => ({
  method: 'DELETE',
  url: `api/sites/${site.identifier}`
});

export const updateSite = site => ({
  method: 'PATCH',
  url: `api/sites/${site.identifier}`,
  data: {site}
});

export const createSite = site => ({
    method: 'POST',
    url: 'api/sites',
    data: {site}
});

export const fetchTemplates = () => ({
    method: 'GET',
    url: 'api/templates'
});

export const cloneTemplate = (template, site) => ({
  method: 'POST',
  url: `api/templates/${template.identifier}/clone`,
  data: {site}
});
