import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
// import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div className="'flex-area'">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          <div className="Notifications notificationHeader">
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
              {listNotifications.length > 0 ? (
                listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))
              ) : (
                <li>No new notification for now</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;