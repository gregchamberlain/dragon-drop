import React from 'react';

const EditorToolbar = ({ pages, currentPage, changePage,
  children, savePage, preview, site, openCatalog }) => (
  <div>
    <div className='editor-content'>
      {children}
    </div>
    <div className='editor-toolbar'>
    <div className='toolbar-item action' onClick={openCatalog}>Catalog</div>
    <div className='toolbar-item brand'>{site.name}</div>
      <select value={currentPage} onChange={changePage}>
        { pages.map(page => (
          <option key={page.path} value={page.path}>{page.name}</option>
        ))}
        { pages.length >= 5 ? "" : <option key='new-page' value='/new-page'>New Page</option> }
      </select>
      <div className='flex-space'></div>
      <div className='toolbar-item action' onClick={preview}>Preview</div>
      <div className='toolbar-item action' onClick={savePage}>Save</div>
    </div>
  </div>
);

export default EditorToolbar;
