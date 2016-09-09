import React from 'react';
import Pages from 'react-icons/lib/fa/copy';
import Cart from 'react-icons/lib/fa/shopping-cart';
import Back from 'react-icons/lib/fa/arrow-left';
import Chart from 'react-icons/lib/fa/pie-chart';
import Gear from 'react-icons/lib/fa/cog';
import { Link } from 'react-router';
import LoadingPage from './loading_page.jsx';

const Sidebar = ({ children, params, loading }) => (
  <div className='sidebar-container'>
    <div className="sites-sidebar">
      <Link
        to={`/sites`}
        className='sidebar-item'>
        <Back />
      </Link>
      <Link
        to={`/sites/${params.siteId}/editor`}
        className='sidebar-item'
        activeClassName="active">
        <Pages />
      </Link>
      <Link
        to={`/sites/${params.siteId}/analytics`}
        className='sidebar-item'
        activeClassName="active">
        <Chart />
      </Link>
      <Link
        to={`/sites/${params.siteId}/settings`}
        className='sidebar-item site-settings-button'
        activeClassName="active">
        <Gear />
      </Link>
    </div>
    <div className="site-content">
      <LoadingPage loading={loading}>
        {children}
      </LoadingPage>
    </div>
  </div>
);

export default Sidebar;
