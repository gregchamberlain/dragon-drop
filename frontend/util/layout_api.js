export const saveLayout = (layout, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/layouts',
    data: {layout: layout},
    success,
    error
  });
};

export const fetchLayouts = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/layouts',
    success,
    error
  });
};
