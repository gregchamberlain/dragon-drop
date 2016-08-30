import React from 'react';

const Toolbar = ({ brand, left = [], right = [], children }) => (
  <div className="toolbar-layout">
    <div className="toolbar">
      <div className="toolbar-item brand">{brand}</div>
      {left.map((item, idx) => (
        <div key={`left${idx}`} className="toolbar-item">{item}</div>
      ))}
      <div className="space"></div>
      {right.map((item, idx) => (
        <div key={`right${idx}`} className="toolbar-item">{item}</div>
      ))}
    </div>
    <div className="content">
      {children}
    </div>
  </div>
);



export default Toolbar;
