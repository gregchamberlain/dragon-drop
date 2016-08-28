import { connect } from 'react-redux';
import SiteDetail from './site_detail.jsx';
import { mergePages } from '../../util';

const mapStateToProps = ({ sites, pages }, { params }) => ({
  site: sites[params.siteId] || {},
  pages: sites[params.siteId] ? mergePages(pages, sites[params.siteId].pages) : [],
});

export default connect(mapStateToProps)(SiteDetail);
