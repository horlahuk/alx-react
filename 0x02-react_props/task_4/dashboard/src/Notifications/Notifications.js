import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

// Define a functional component using arrow function syntax
const Notifications = ({ displayDrawer }) => {
  // If 'displayDrawer' prop is true, return a set of notifications along with a close button
  if (displayDrawer) {
    return (
      <div className="flex-area">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        <div className="Notifications">
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "10px",
              position: "absolute",
              right: "2px",
              top: "2px",
              cursor: "pointer"
            }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeIcon} alt="closeIcon" width="10px" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={getLatestNotification()} />
          </ul>
        </div>
      </div>
    );
  }

  // If 'displayDrawer' prop is false, return a message saying "Your notifications"
  return (
    <div className="menuItem">
      <p>Your notifications</p>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;