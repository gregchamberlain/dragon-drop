import { connect } from 'react-redux';
import SiteDetail from './site_detail.jsx';

const mapStateToProps = ({ sites }, { params }) => ({
  site: sites[params.siteId] || {}
});

export default connect(mapStateToProps)(SiteDetail);
