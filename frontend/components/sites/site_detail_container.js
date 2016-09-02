import { connect } from 'react-redux';
import SiteDetail from './site_detail.jsx';
import { mergePages } from '../../util';

const mapStateToProps = ({ sites, pages, loading }, { params }) => ({
  loading: loading['site'],
});

export default connect(mapStateToProps)(SiteDetail);
