import { connect } from 'react-redux';
import PagesMain from './pages_main.jsx';
import { mergePages } from '../../../util';

const mapStateToProps = ({ sites, pages }, { params }) => ({
  site: sites[params.siteId] || {},
  pages: sites[params.siteId] && sites[params.siteId].pages ? mergePages(pages, sites[params.siteId].pages) : [],
});

export default connect(mapStateToProps)(PagesMain);
