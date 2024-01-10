import React from "react";
import { getFullYear, getFooterCopy } from "../utils";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>{getFooterCopy(true)}</p>
      <p>{getFullYear()}</p>
    </footer>
  );
};

export default Footer;