import React from 'react';
import Sidebar from '../ui/sidebar.jsx';

const SiteDetail = ({ site, pages, params, children, loading }) => (
  <Sidebar loading={loading} params={params}>
    {children}
  </Sidebar>
);

export default SiteDetail;
