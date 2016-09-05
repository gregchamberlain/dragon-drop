export const OPEN_EDITOR = 'OPEN_EDITOR';
export const CLOSE_EDITOR = 'CLOSE_EDITOR';
export const COPY_COMPONENT = 'COPY_COMPONENT';
export const PASTE_COMPONENT = 'PASTE_COMPONENT';
export const OPEN_CATALOG = 'OPEN_CATALOG';
export const CLOSE_CATALOG = 'CLOSE_CATALOG';

export const openEditor = (i, inputTypes) => ({
  type: OPEN_EDITOR,
  i,
  inputTypes
});

export const closeEditor = () => ({
  type: CLOSE_EDITOR
});

export const copyComponent = component => {
  component
}

export const openCatalog = () => ({
  type: OPEN_CATALOG
})

export const closeCatalog = () => ({
  type: CLOSE_CATALOG
})
