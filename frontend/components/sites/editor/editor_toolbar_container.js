import { connect } from 'react-redux';
import EditorToolbar from './editor_toolbar';
import { savePage } from '../../../actions/page_actions';
import { map } from '../../../util/entity_utils';
import { closeEditor } from '../../../actions/editor_actions.js';
import { push } from 'react-router-redux';
import { parsePageId } from '../../../util/router_utils.js';
import { openCatalog } from '../../../actions/editor_actions.js';

const mapStateToProps = ({ sites, pages }, { params, location }) => ({
  site: sites[params.siteId],
  pages: map(sites[params.siteId], 'pages', pages),
  currentPage: params.pageId ? `/${params.pageId}` : location.pathname.indexOf('new-page') === -1 ? '/' : '/new-page',
  location: `/sites/${params.siteId}/editor`
});

const mapDispatchToProps = (dispatch, { params }) => ({
  changePage: e => {
    dispatch(closeEditor());
    dispatch(push(`/sites/${params.siteId}/editor${e.target.value}`));
  },
  savePage: () => dispatch(savePage(parsePageId(params))),
  preview: () => dispatch(push(`/preview/${parsePageId(params)}`)),
  openCatalog: () => dispatch(openCatalog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorToolbar);
