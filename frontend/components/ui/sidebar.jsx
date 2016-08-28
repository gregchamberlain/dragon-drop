import React from 'react';
import Pages from 'react-icons/lib/fa/copy';
import Cart from 'react-icons/lib/fa/shopping-cart';
import Chart from 'react-icons/lib/fa/pie-chart';
import Gear from 'react-icons/lib/fa/cog';
import { Link } from 'react-router'

const Sidebar = ({ children, params }) => (
  <div className='sites-container'>
    <div className="sites-sidebar">
      <Link to={`/sites/${params.siteId}/editor`}>
        <div className='sidebar-item'>
            <Pages />
        </div>
      </Link>
      <Link to={`/sites/${params.siteId}/store`}>
        <div className='sidebar-item'>
            <Cart />
        </div>
      </Link>
      <Link to={`/sites/${params.siteId}/analytics`}>
        <div className='sidebar-item'>
            <Chart />
        </div>
      </Link>
      <Link to={`/sites/${params.siteId}/settings`}>
        <div className='sidebar-item'>
            <Gear />
        </div>
      </Link>
    </div>
    <div className="sites-content">
      {children}
    </div>
  </div>
);

export default Sidebar;
