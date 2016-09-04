import { connect } from 'react-redux';
import PageSettings from './page_settings';
import { withRouter } from 'react-router';
import { updatePage } from '../../../actions/page_actions';
import { parsePageId } from '../../../util/router_utils';

const mapStateToProps = ( { pages, loading }, { params }) => ({
  page: pages[parsePageId(params)],
  loading: loading['update-page']
});

const mapDispatchToProps = dispatch => ({
  updatePage: page => dispatch(updatePage(page)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageSettings)
);
