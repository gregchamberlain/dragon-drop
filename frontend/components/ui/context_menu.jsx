import React from 'react';

const ContextMenu = ({ values }) => (
  <div className='context-menu'>
    {values.map(val => <div>{val}</div>)}
  </div>
);

export default ContextMenu;
