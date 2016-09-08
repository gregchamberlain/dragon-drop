import React, { Component } from 'react';
var LineChart = require("react-chartjs").Line;
import moment from 'moment';

const options = {
  responsive: true,
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'll'
        }
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        min: 0,
        beginAtZero: true   // minimum value will be 0.
      }
    }]
  }
}

class AnalyticsPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{padding: 50, flex: 1, width: '70%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Site Views</h1>
        <LineChart data={dataFromViews(this.props.site.views)} options={options} ref="chart"/>
      </div>
    );
  }
}

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

export default AnalyticsPage;
