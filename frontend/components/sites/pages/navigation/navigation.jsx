import React from 'react';
import NewPageForm from './new_page_form.jsx';
import { IndexLink } from 'react-router';
import File from 'react-icons/lib/fa/file-o';

const PageNavigation = ({ site, pages, createPage, loading, location }) => (
  <div className="page-navigation">
    <h3>Pages</h3>
    <ul className="page-list">
      {pages.map(page => (
        <li key={page.id} className="page-list-item">
          <IndexLink to={`${location}${page.path}`} activeClassName="active">
            <File />
            {page.name}
          </IndexLink>
        </li>
      ))}
      <NewPageForm createPage={createPage} loading={loading} />
    </ul>
  </div>
);

export default PageNavigation;
