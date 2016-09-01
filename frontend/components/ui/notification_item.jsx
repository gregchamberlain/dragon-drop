import React from 'react';

const getBG = n => {
  switch (n.type) {
    case "success":
      return '#4CAF50'
    case "error":
      return '#f44336'
    default:
      return '#444'
  }
}

const NotificationItem = ({ notification }) => (
  <div style={{...styles, ...{background: getBG(notification)}}}>
    {notification.message}
  </div>
);

const styles = {
  width: '100%',
  background: '#888',
  boxShadow: '2px 2px 10px black',
  borderRadius: 2,
  color: '#fff',
  padding: 15,
  margin: 15,
};

export default NotificationItem;
