export const CREATE_COMPONENT = 'CREATE_COMPONENT';
export const DESTROY_COMPONENT = 'DESTROY_COMPONENT';
export const UPDATE_LAYOUT = 'UPDATE_LAYOUT';
export const UPDATE_PROPS = 'UPDATE_PROPS';

export const createComponent = (pageId, component) => ({
  type: CREATE_COMPONENT,
  pageId,
  component
});

export const destroyComponent = (pageId, component) => ({
  type: DESTROY_COMPONENT,
  pageId,
  component
});

export const updateLayout = layout => ({
  type: UPDATE_LAYOUT,
  layout
});

export const updateProps = (id, props) => ({
  type: UPDATE_PROPS,
  id,
  props
})
