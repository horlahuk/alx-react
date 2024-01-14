import React, { Component } from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li> : null}
        {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }} onClick={() => markAsRead(id)}></li> : null}
      </>
    );
  }
  }
  

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;