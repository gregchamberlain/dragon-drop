export const createComponent = (pageId, component) => ({
  method: 'POST',
  url: `api/pages/${pageId}/components`,
  data: {component}
});

export const destroyComponent = component => ({
  method: 'DELETE',
  url: `api/components/${component.id}`
})
