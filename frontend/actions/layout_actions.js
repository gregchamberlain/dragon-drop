export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const SAVE_LAYOUT = 'SAVE_LAYOUT';
export const REQUEST_LAYOUTS = 'REQUEST_LAYOUTS';
export const RECEIVE_LAYOUTS = 'RECEIVE_LAYOUTS';
export const RECEIVE_LAYOUT = 'RECEIVE_LAYOUT';

export const receiveLayout = layout => ({
  type: RECEIVE_LAYOUT,
  layout
});

export const requestLayouts = () => ({
  type: REQUEST_LAYOUTS
});

export const receiveLayouts = layouts => ({
  type: RECEIVE_LAYOUTS,
  layouts
});

export const changeLayout = layout => ({
  type: CHANGE_LAYOUT,
  layout
});

export const saveLayout = name => ({
  type: SAVE_LAYOUT,
  name
});
