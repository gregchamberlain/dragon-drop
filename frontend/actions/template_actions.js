export const REQUEST_TEMPLATES = 'REQUEST_TEMPLATES';
export const CLONE_TEMPLATE = 'CLONE_TEMPLATE';

export const requestTemplates = () => ({
  type: REQUEST_TEMPLATES
});

export const cloneTemplate = (site, template) => ({
  type: CLONE_TEMPLATE,
  site,
  template
});
