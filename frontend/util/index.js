export const parseLayout = layout => (
  Object.assign({}, layout, {data: JSON.parse(layout.data)})
);
