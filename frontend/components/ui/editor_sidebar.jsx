import React from 'react';
import File from 'react-icons/lib/fa/file-o';
import Plus from 'react-icons/lib/fa/plus';
import Image from 'react-icons/lib/fa/image';
import Brush from 'react-icons/lib/fa/paint-brush';
import Compass from 'react-icons/lib/fa/compass';
import Wrench from 'react-icons/lib/fa/wrench';
import { Link } from 'react-router';
import Tabs, { Tab } from './tabs.jsx';
import Navigator from '../sites/pages/navigation/page_navigator_container.js';

const EditorSidebar = ({ children, site, pages, params }) => (
  <div className="editor-sidebar-container">
    <div className='editor-sidebar'>
      <Tabs>
        <Tab icon={<Compass />}>
          <Navigator params={params}>Navigator!</Navigator>
        </Tab>
        <Tab icon={<Wrench />}>
          <div>Settings</div>
        </Tab>
        <Tab icon={<Plus />}>
          <div>Catalog</div>
        </Tab>
      </Tabs>
    </div>
    <div className='editor-content'>
      {children}
    </div>
  </div>
);

export default EditorSidebar;

/*
<div className="sidebar-tabs">
  <div className="tab"><Compass /></div>
  <div className="tab"><Wrench /></div>
  <div className="tab"><Plus /></div>
</div>
<div className='sidebar-header'>{site.name}</div>
<div className='sidebar-group'>
  <h1>Pages</h1>
  <ul>
    {pages.map(page =>  (
      <Link key={page.id} to={`/sites/${params.siteId}/editor/${page.id}`}>
        <File /> {page.name} - <small>{page.path}</small>
      </Link>
    ))}
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
*/
