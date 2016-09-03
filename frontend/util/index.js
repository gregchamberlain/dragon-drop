export const parseLayout = layout => (
  Object.assign({}, layout, {data: JSON.parse(layout.data)})
);


export const mergePages = (state, pages) => pages.map(id => state[id]);

export const mergeComponents = (state, components) => components.map(id => state[id]);

export const stringify = components => {
  return components.map(c => {
    c.layout = JSON.stringify(c.layout);
    c.props = JSON.stringify(c.props);
    return c;
  })
};

export const parse = components => {
  return components.map(c => {
    c.layout = JSON.parse(c.layout);
    c.props = JSON.parse(c.props);
    return c
  })
};
