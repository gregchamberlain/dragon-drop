import { normalize, Schema, arrayOf } from 'normalizr';

export const site = new Schema('sites');
export const arrayOfSites = arrayOf(site);

export const page = new Schema('pages');
export const arrayOfPages = arrayOf(page);

export const component = new Schema('components');
export const arrayOfComponents = arrayOf(component);

page.define({
  components: arrayOfComponents
});

site.define({
  pages: arrayOfPages
});
