import { connect } from 'react-redux';
import PageSettings from './page_settings';
import { withRouter } from 'react-router';
import { updatePage, destroyPage } from '../../../actions/page_actions';
import { parsePageId } from '../../../util/router_utils';

const mapStateToProps = ( { pages, loading }, { params }) => ({
  page: pages[parsePageId(params)],
  loading: loading['update-page']
});

const mapDispatchToProps = dispatch => ({
  destroyPage: page => dispatch(destroyPage(page)),
  updatePage: (page, oldPage) => dispatch(updatePage(page, oldPage)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageSettings)
);
