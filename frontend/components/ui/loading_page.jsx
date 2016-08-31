import React from 'react';

const LoadingPage = ({ loading, children }) => (
  <div className="loading-page">
    { loading ? (
      <h1>Loading....</h1>
    ) : (
      children
    )}
  </div>
);

export default LoadingPage;
