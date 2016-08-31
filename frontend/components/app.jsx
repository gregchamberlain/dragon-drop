import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const App = ({ children }) => (
  <div className="app-container">
    <ReactCSSTransitionGroup
      transitionName="auto"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
  </div>
);

export default App;
