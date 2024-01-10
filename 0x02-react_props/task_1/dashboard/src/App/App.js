import React from "react";
import './App.css'
import Notifications from '../Notifications/Notifications.js'
import Header from '../Header/Header.js'
import Login from '../Login/Login.js'
import Footer from '../Footer/Footer.js'

function App() {
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
