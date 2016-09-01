import React from 'react';
import { connect } from 'react-redux';
import NotificationItem from './notification_item.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Notifications = ({ notifications, children }) => (
  <div style={styles.wrapper}>
    {children}
    <div style={styles.tray}>
      <ReactCSSTransitionGroup
        transitionName="notifications"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {notifications.map(item => <NotificationItem key={item.id} notification={item} />)}
      </ReactCSSTransitionGroup>
    </div>
  </div>
);

const styles = {
  wrapper: {
    width: '100%',
    height: '100%'
  },
  tray: {
    position: 'fixed',
    bottom: 0,
    width: 300,
    zIndex: 3,
  }
};


const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps)(Notifications);
