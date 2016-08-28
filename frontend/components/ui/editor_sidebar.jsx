import React from 'react';
import File from 'react-icons/lib/fa/file-o';
import Plus from 'react-icons/lib/fa/plus';
import Image from 'react-icons/lib/fa/image';
import Brush from 'react-icons/lib/fa/paint-brush';

const EditorSidebar = ({ children, site, pages }) => (
  <div>
    <div className='editor-sidebar'>
      <div className='sidebar-header'>{site.name}</div>
      <div className='sidebar-group'>
        <h1>Pages</h1>
        <ul>
          {pages.map(page =>  <li key={page.id}><File /> {page.name} - <small>{page.path}</small></li>)}
          <li><Plus /> New Page</li>
        </ul>
      </div>
      <div className='sidebar-group'>
        <h1>Assets</h1>
        <ul>
          <li><Image /> Images</li>
          <li><Brush /> Theme</li>
        </ul>
      </div>
    </div>
    <div className='editor-content'>
      {children}
    </div>
  </div>
);

export default EditorSidebar;
