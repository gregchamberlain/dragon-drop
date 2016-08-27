export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const SAVE_LAYOUT = 'SAVE_LAYOUT';

export const changeLayout = layout => ({
  type: CHANGE_LAYOUT,
  layout
});

export const saveLayout = () => ({
  type: SAVE_LAYOUT
});
