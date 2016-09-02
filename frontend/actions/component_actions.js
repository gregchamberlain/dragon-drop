export const CREATE_COMPONENT = 'CREATE_COMPONENT';
export const DESTROY_COMPONENT = 'DESTROY_COMPONENT';

export const createComponent = (pageId, component) => ({
  type: CREATE_COMPONENT,
  pageId,
  component
});

export const destroyComponent = component => ({
  type: DESTROY_COMPONENT,
  component
});

window.createComponent = createComponent;
window.destroyComponent = destroyComponent;
