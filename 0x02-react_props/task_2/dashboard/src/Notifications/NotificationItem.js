import React from "react";
import './Notifications.css';

const NotificationItem = ({ type, html, value }) => {
  // If the 'value' prop is provided, return a 'li' element with 'value' as its content
  if (value) {
    return <li data-notification-type={type}>{value}</li>;
  }

  // If the 'value' prop is not provided, return a 'li' element with 'html' as its inner HTML
  return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
};


export default NotificationItem;