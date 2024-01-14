import React from "react";
import './Notifications.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  // If the 'value' prop is provided, return a 'li' element with 'value' as its content
  if (value) {
    return <li data-notification-type={type}>{value}</li>;
  }

  // If the 'value' prop is not provided, return a 'li' element with 'html' as its inner HTML
  return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default'
};


export default NotificationItem;