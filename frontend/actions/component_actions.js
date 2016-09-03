export const CREATE_COMPONENT = 'CREATE_COMPONENT';
export const DESTROY_COMPONENT = 'DESTROY_COMPONENT';
export const UPDATE_LAYOUT = 'UPDATE_LAYOUT';

export const createComponent = (pageId, component) => ({
  type: CREATE_COMPONENT,
  pageId,
  component
});

export const destroyComponent = component => ({
  type: DESTROY_COMPONENT,
  component
});

export const updateLayout = layout => ({
  type: UPDATE_LAYOUT,
  layout
});

window.createComponent = createComponent;
window.destroyComponent = destroyComponent;
