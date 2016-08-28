export const parseLayout = layout => (
  Object.assign({}, layout, {data: JSON.parse(layout.data)})
);


export const mergePages = (state, pages) => pages.map(id => state[id]);
