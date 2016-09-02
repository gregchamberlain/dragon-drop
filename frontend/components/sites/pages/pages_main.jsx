import React from 'react';
import EditorSidebar from '../../ui/editor_sidebar.jsx';

const PagesMain = ({ site, pages, params, children }) => (
  <EditorSidebar params={params}>
    {children}
  </EditorSidebar>
);

export default PagesMain;
