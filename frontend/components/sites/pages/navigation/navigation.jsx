import React from 'react';
import NewPageForm from './new_page_form.jsx';
import { Link } from 'react-router';
import File from 'react-icons/lib/fa/file-o';

const PageNavigation = ({ site, pages, createPage, loading, location }) => (
  <div className="page-navigation">
    <h1>{site.name}</h1>
    <ul className="page-list">
      {pages.map(page => (
        <li key={page.id} className="page-list-item">
          <Link to={`${location}/${page.id}`} activeClassName="active">
            <File />
            {page.name}
          </Link>
        </li>
      ))}
      <NewPageForm createPage={createPage} loading={loading} />
    </ul>
  </div>
);

export default PageNavigation;
