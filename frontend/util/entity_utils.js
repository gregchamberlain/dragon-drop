export const toArray = obj => (
  Object.keys(obj).map(id => obj[id]).filter(entity => entity.id)
);

export const map = (obj, relation, state) => {
  if (!obj || !obj[relation]) {
    return [];
  } else {
    return obj[relation].map(id => state[id]);
  }
};
