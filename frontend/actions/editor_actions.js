export const OPEN_EDITOR = 'OPEN_EDITOR';
export const CLOSE_EDITOR = 'CLOSE_EDITOR';

export const openEditor = (i, inputTypes) => ({
  type: OPEN_EDITOR,
  i,
  inputTypes
});

export const closeEditor = () => ({
  type: CLOSE_EDITOR
});
