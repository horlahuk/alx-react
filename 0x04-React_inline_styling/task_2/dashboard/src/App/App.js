import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

class App extends React.Component {
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render () {
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className={css(styles.AppHead)}>
            <Header />
            <Notifications listNotifications={this.listNotifications} />
          </div>
          <div className={css(styles.body)}>
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
                iste vero dolor voluptates.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#fff",
  },
  AppHead: {
    display: "flex",
    borderBottom: "3px solid #FF0000",
    justifyContent: "space-between",
  },
  body: {
    minHeight: "50vh",
  },
  footer: {
    bottom: "0",
    width: "100%",
    borderTop: "3px solid #FF0000",
    fontStyle: "italic",
    textAlign: "center",
    },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;