import { connect } from 'react-redux';
import EditorToolbar from './editor_toolbar';
import { savePage } from '../../../actions/page_actions';
import { map } from '../../../util/entity_utils';
import { push } from 'react-router-redux';
import { parsePageId } from '../../../util/router_utils.js';

const mapStateToProps = ({ sites, pages }, { params }) => ({
  site: sites[params.siteId],
  pages: map(sites[params.siteId], 'pages', pages),
  currentPage: params.pageId ? `/${params.pageId}` : '/',
  location: `/sites/${params.siteId}/editor`
});

const mapDispatchToProps = (dispatch, { params }) => ({
  changePage: e => dispatch(push(`/sites/${params.siteId}/editor${e.target.value}`)),
  savePage: () => dispatch(savePage(parsePageId(params))),
  preview: () => dispatch(push(`/preview/${parsePageId(params)}`)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorToolbar);
