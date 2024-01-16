import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        ) : (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
            <ul className={css(styles.ul)}>
              {this.props.listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
              {this.props.listNotifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={val.id} />;
              })}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-5px)" },
  "75%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0)" },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px dashed #e14852",
    padding: "1rem",
    position: "absolute",
    top: "1.8em",
    right: "0",
    "@media (max-width: 426px)": {
      display: "block",
      border: "none",
      height: "100vh",
      width: "100vw",
      padding: "0",
      fontSize: "20px",
      backgroundColor: "white",
    },
  },

  ul: {
    "@media (max-width: 426px)": {
      margin: "0",
    },
  },

  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },

  menuItem: {
    textAlign: "right",
    position: "relative",
    zIndex: 100,
    ":hover": {
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },

  "[data-notification-type='default']": {
    color: "blue",
  },

  "[data-urgent]": {
    color: "red",
  },

  "[data-notification-type='urgent']": {
    color: "red",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;