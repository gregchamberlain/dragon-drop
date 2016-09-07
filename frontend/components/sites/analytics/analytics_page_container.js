import { connect } from 'react-redux';
import AnalyticsPage from './analytics_page';
import {toArray, map} from '../../../util/entity_utils';

const mapStateToProps = ({ views, sites }, { params }) => ({
  views: map(sites[params.siteId], 'views', views)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsPage);
