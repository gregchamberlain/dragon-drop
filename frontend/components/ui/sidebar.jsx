import React from 'react';

const Sidebar = ({ children }) => (
  <div className='sites-container'>
    <div className="sites-sidebar">
    </div>
    <div className="sites-content">
      {children}
    </div>
  </div>
);

export default Sidebar;
