import { Schema, arrayOf } from 'normalizr';

export const site = Schema('sites');
export const arrayOfSites = arrayOf(site);
