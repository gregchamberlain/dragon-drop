export const fetchPages = (siteId, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/sites/${siteId}/pages`,
    success,
    error
  });
};

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

// export const createPage = (siteId, page, success, error) => {
//   $.ajax({
//     method: 'POST',
//     url: `api/sites/${siteId}/pages`,
//     data: {page},
//     success,
//     error
//   });
// };
