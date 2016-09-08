import { connect } from 'react-redux';
import AnalyticsPage from './analytics_page';
import {toArray, map} from '../../../util/entity_utils';
import moment from 'moment';

const mapStateToProps = ({ views, sites, pages }, { params }) => ({
  site: sites[params.siteId],
  pages: map(sites[params.siteId], 'pages', pages)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsPage);

const dataFromViews = (views) => {
  const data_array = Object.keys(views).map(date => ({date: new Date(date), count: views[date]})).sort((a, b) => a.date - b.date);
  const labels =  data_array.map(data => moment(data.date).format('MMM Do'));
  const data = data_array.map(data => data.count);
  const datasets = [{
    label: "Site Views",
    fillColor: "rgba(99,123,133,0.3)",
    strokeColor: "rgba(53,181,229,1)",
    pointColor: "rgba(53,181,229,1)",
    pointStrokeColor: "#fff",
    data: data,
  }];
  return { labels, datasets }
}
