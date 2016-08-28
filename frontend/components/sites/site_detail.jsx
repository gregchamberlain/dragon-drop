import React from 'react';
import EditorSidebar from '../ui/editor_sidebar.jsx';

const SiteDetail = ({ site, pages }) => (
  site && pages ? (
    <EditorSidebar site={site} pages={pages}>
      <h1>{site.name}</h1>
      <ul>
        {pages && pages.map(page => <li key={page.id}>{page.name}</li>)}
      </ul>
      <div style={{height: 1000}}></div>
  </EditorSidebar>) : <div></div>
);

export default SiteDetail;
