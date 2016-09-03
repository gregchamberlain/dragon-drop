export const parseLayout = layout => (
  Object.assign({}, layout, {data: JSON.parse(layout.data)})
);


export const mergePages = (state, pages) => pages.map(id => state[id]);

export const mergeComponents = (state, components) => components.map(id => state[id]);

export const stringify = components => {
  if (!Array.isArray(components)) {
    components.layout = JSON.stringify(components.layout);
    components.props = JSON.stringify(components.props);
    return components
  }
  return components.map(c => {
    c.layout = JSON.stringify(c.layout);
    c.props = JSON.stringify(c.props);
    return c;
  })
};

// export const parse = components => {
//   if (!Array.isArray(components)) {
//     components.layout = JSON.parse(components.layout);
//     components.props = JSON.parse(components.props);
//     return components
//   }
//   return components.map(c => {
//     c.layout = JSON.parse(c.layout);
//     c.props = JSON.parse(c.props);
//     return c
//   })
// };

export const parse = obj => {
  if (obj === undefined) return;
  Object.keys(obj).forEach(key => {
    let o = obj[key];
    o.layout = JSON.parse(o.layout);
    o.props = JSON.parse(o.props);
  });
  return obj;
}
