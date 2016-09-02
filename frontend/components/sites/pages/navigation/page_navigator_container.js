import { connect } from 'react-redux';
import PageNavigator from './navigation.jsx';
import { createPage } from '../../../../actions/page_actions.js';
import { map } from '../../../../util/entity_utils.js';

const mapStateToProps = ({ sites, pages, loading }, { params }) => ({
  site: sites[params.siteId] || {},
  pages: map(sites[params.siteId], 'pages', pages),
  loading: loading['create-page'],
  location: `/sites/${params.siteId}/editor`
});

const mapDispatchToProps = (dispatch, { params })=> ({
  createPage: page => dispatch(createPage(params.siteId, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigator);
