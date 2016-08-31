import React from 'react';
import Sidebar from '../ui/sidebar.jsx';

const SiteDetail = ({ site, pages, params, children, loading }) => (
  <Sidebar loading={loading} params={params}>
  {console.log("loading...", loading)}
    {children}
  </Sidebar>
);

export default SiteDetail;
