import React from 'react';

const AnalyticsPage = ({ views }) => (
  <div>
    Views: {JSON.stringify(views.length)}
  </div>
);

export default AnalyticsPage;
