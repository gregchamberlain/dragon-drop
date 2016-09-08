import React from 'react';
var LineChart = require("react-chartjs").Line;

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

const AnalyticsPage = ({ views }) => (
  <div style={{padding: 50, flex: 1, width: '70%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
    <h1>Site Views</h1>
    <LineChart data={views} options={options}/>
  </div>
);

export default AnalyticsPage;
